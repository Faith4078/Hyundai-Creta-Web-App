# Hyundai Bahrain — Creta Launch Campaign

> The gamified web app for Hyundai Bahrain's national treasure hunt marking the Creta launch — built for a 50,000+ user spike at go-live.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![Redis](https://img.shields.io/badge/Redis-Sorted%20Sets-DC382D?style=flat-square&logo=redis)](https://redis.io)
[![Better Auth](https://img.shields.io/badge/Better%20Auth-Session%20Mgmt-black?style=flat-square)](https://better-auth.com)

---

## Overview

Built for Hyundai Bahrain's national treasure hunt campaign marking the launch of the Creta.

Participants progress through a sequence of clues, unlock stages by scanning QR codes placed at physical locations across the country, and compete on a real-time leaderboard. Every registration syncs back to Hyundai's internal CRM as a lead, and an admin dashboard gives the campaign team live visibility into participation.

The design target: absorb a **50,000+ user** go-live spike without degrading leaderboard reads or entry writes.

---

## Architecture

```
Browser ──▶ Next.js on Vercel (App Router · Better Auth · API routes)
                │
                ├──▶ Supabase (PostgreSQL) — durable storage: profiles, entries, campaign state
                ├──▶ Redis (sorted sets)  — real-time leaderboard ranking
                └──▶ Hyundai CRM          — lead sync via webhook forwarding
```

The campaign format is short-lived (a few weeks), with most traffic arriving in the first hours,  so a separate, always-running backend wasn't worth building or operating. All server-side logic lives in Next.js API routes, which Vercel scales automatically through the spike. Each kind of data lives in the service best suited to it: PostgreSQL keeps the permanent records, Redis handles leaderboard ranking, and Hyundai's CRM owns the sales leads.

---

## Engineering Challenges

### 1. Real-Time Leaderboard at Scale

A naive database-query leaderboard collapses under concurrent writes at launch traffic. The leaderboard was built on **Redis sorted sets** — `ZINCRBY` for score writes, `ZREVRANK` for O(log N) rank reads decoupling rank computation entirely from PostgreSQL.

Clients refresh rankings on a short polling interval  a deliberate fit for serverless, where functions can't hold push connections open  with **animated transitions** on rank changes, keeping movement readable rather than jarring during rapid shuffles.

### 2. Lead Sync That Can't Lose Data

Every registration must reach Hyundai's CRM — a third-party system outside the platform's control, sitting directly on the sign-up path. The classic failure mode: the CRM is slow or down, and either the user's registration hangs or the lead silently vanishes.

The design is durable-first: validate, write to Postgres, then forward to the CRM's webhook with retries and a hard timeout. A CRM outage never fails or delays a user's submission — each lead's sync status is recorded so failed forwards can be re-driven later. All of it runs in Next.js API routes; no dedicated service to operate.

---

## Features

- **Treasure hunt progression** — clue grid with locked/unlocked stages; players advance by completing challenges tied to physical locations
- **QR code check-ins** — in-browser QR scanner with location validation and success/failure states as part of the on-location challenge flow
- **Real-time leaderboard** — Redis-backed ranking that stays fast under concurrent write pressure, with animated rank transitions on the frontend
- **Auth & session management** — Better Auth handling registration, login, and session lifecycle
- **User data persistence** — Supabase (PostgreSQL) for participant profiles, entries, and campaign state
- **CRM webhook integration** — API routes ingesting lead submissions and syncing to Hyundai's internal tracking system in real time
- **Admin dashboard** — live campaign visibility: user activity and puzzle completion analytics, recent registrations, and game management
- **Campaign marketing site** — launch countdown, prize showcase, and how-it-works flow driving sign-ups

---

## Tech Stack

| Layer           | Technology                                             |
| --------------- | ------------------------------------------------------ |
| Framework       | Next.js (App Router) + TypeScript                      |
| UI              | Tailwind CSS + shadcn/ui                               |
| Auth            | Better Auth                                            |
| Database        | Supabase (PostgreSQL)                                  |
| Leaderboard     | Redis Sorted Sets (`ZINCRBY`, `ZREVRANK`, `ZREVRANGE`) |
| API Integration | Next.js API Routes (lead capture, CRM sync)            |
| Load testing    | k6 (launch-spike profile in `load/`)                   |
| Deployment      | Vercel                                                 |

---

## Leaderboard Design

The leaderboard is the performance-critical path of the entire system. Design decisions:

```
Write path:  challenge completed → ZINCRBY leaderboard:campaign <points> <userId>
Read path:   ZREVRANK leaderboard:campaign <userId>      → user rank, O(log N)
             ZREVRANGE leaderboard:campaign 0 99          → top 100, O(log N + 100)
```

Redis sorted sets give guaranteed O(log N) rank reads regardless of leaderboard size — no full-table scans, no rank recomputation on every page load. PostgreSQL handles durable storage; Redis handles the competitive ranking layer.

Frontend rank changes animate with layout transitions smooth enough to be readable, fast enough not to feel laggy during burst updates.

---

## Performance

The landing page is most users' first touchpoint with the campaign, so first-load performance was treated as a product feature:

- Next.js `Image` component for automatic image optimization across the campaign pages
- Route prefetching via `next/link`, so stage transitions feel instant
- Scroll-triggered animations that defer offscreen rendering work until sections come into view

---

## Project Structure

```
app/
├── (main)/              # Public campaign site — landing, contact, terms
├── (auth)/              # Sign-in / sign-up flows
├── (users dashboard)/   # Authenticated hunt — clues, QR scan, leaderboard, winner flow
├── (admin dashboard)/   # Campaign ops — activity & completion analytics
└── api/                 # Route handlers — auth, leaderboard, lead sync
components/              # Feature components + shadcn/ui primitives
lib/leaderboard.ts       # Redis sorted-set leaderboard (score writes + rank reads)
lib/crm.ts               # CRM webhook forwarding (retries + hard timeout)
load/launch-spike.js     # k6 launch-spike load profile
auth.ts                  # Better Auth configuration
```

---

## Local Development

**Prerequisites:** Node.js 20.9+, pnpm, a Supabase project, and a Redis instance.

```bash
git clone https://github.com/Faith4078/Hyundai-Creta-Web-App.git
cd Hyundai-Creta-Web-App
pnpm install
cp .env.example .env.local   # then fill in the values below
pnpm dev
```

### Environment Variables

| Variable                               | Purpose                                                        |
| -------------------------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`             | Supabase project URL                                           |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key (safe for the client)                 |
| `DATABASE_URL`                         | Postgres connection string used by Drizzle and Better Auth     |
| `REDIS_URL`                            | Redis connection string for the leaderboard                    |
| `BETTER_AUTH_SECRET`                   | Secret used to sign Better Auth sessions                       |
| `BETTER_AUTH_URL`                      | Base URL Better Auth uses for redirects/callbacks              |
| `NEXT_PUBLIC_URL`                      | Public base URL of the deployment                              |
| `CRM_WEBHOOK_URL`                      | Hyundai CRM webhook endpoint that leads are forwarded to       |
| `CRM_WEBHOOK_SECRET`                   | Secret sent as a Bearer token when forwarding leads to the CRM |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`       | EmailJS service for the contact form                           |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`      | EmailJS template for the contact form                          |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`       | EmailJS public key for the contact form                        |

---

## Scale Notes

Designed for a **50,000+ user** launch spike. Campaign traffic arrives as a wall, not a ramp — everyone shows up the moment the hunt goes live  and two failure modes dominate that profile:

- **Database connection exhaustion** — serverless functions multiply Postgres connections under burst traffic; Supabase connection pooling via PgBouncer keeps the connection count bounded through the spike
- **Leaderboard contention** — rank reads never block on entry writes, so the leaderboard stays responsive while scores stream in

The launch-spike profile is scripted with [k6](https://k6.io) in [`load/launch-spike.js`](load/launch-spike.js) — a ramp to 50,000 virtual users with realistic think-time, hitting the landing page and leaderboard route with p95 and error-rate thresholds. The full profile needs k6 Cloud or distributed runners; a scaled-down smoke run works locally.
