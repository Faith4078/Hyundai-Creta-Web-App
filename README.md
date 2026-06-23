# Hyundai Bahrain — Creta Launch Campaign

> Fullstack gamified web app powering Hyundai Bahrain's national treasure hunt campaign for the Creta car launch. Built for 50,000+ users at launch.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)
[![Redis](https://img.shields.io/badge/Redis-Sorted%20Sets-DC382D?style=flat-square&logo=redis)](https://redis.io)
[![Better Auth](https://img.shields.io/badge/Better%20Auth-Session%20Mgmt-black?style=flat-square)](https://better-auth.com)

---

## Overview

Hyundai Bahrain ran a national treasure hunt campaign targeting Bahraini citizens to mark the launch of the Creta. I led engineering end-to-end — from architecture decisions through fullstack implementation and production performance optimisation.

The platform handled a high-concurrency launch event, serving **50,000+ users** with a real-time competitive leaderboard, campaign entry tracking, and CRM sync back to Hyundai's internal systems.


## Engineering Challenges

### 1. Real-Time Leaderboard at Scale

A naive database-query leaderboard collapses under concurrent writes at launch traffic. The leaderboard was rebuilt on **Redis sorted sets** ,`ZADD` for score writes, `ZREVRANK` for O(log N) rank reads, decoupling rank computation entirely from PostgreSQL.

Position updates are streamed to the client with **CSS transitions** on rank changes, keeping movement readable rather than jarring during rapid rank shuffles.

### 2. CRM Integration Without a Dedicated Backend

Lead submissions needed to sync back to Hyundai's internal tracking system in real time. Handled via **Next.js API routes as webhook ingestion points** entries hit the route, are validated, written to Supabase, and forwarded to the CRM. No separate service, no ops overhead.

## Features

- **Gamified campaign flow** — treasure hunt mechanics with entry submission, progression states, and competitive ranking
- **Real-time leaderboard** — Redis sorted sets for O(log N) rank reads under concurrent write pressure; animated rank transitions on the frontend
- **Auth & session management** — Better Auth handling registration, login, and session lifecycle
- **User data persistence** — Supabase (PostgreSQL) for participant profiles, entries, and campaign state
- **CRM webhook integration** — API routes ingesting lead submissions and syncing to Hyundai's internal tracking system in real time


---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js TypeScript |
| Auth | Better Auth |
| Database | Supabase (PostgreSQL) |
| Leaderboard | Redis Sorted Sets (`ZADD`, `ZREVRANK`, `ZREVRANGE`) |
| API Integration | Next.js API Routes (webhook ingestion, CRM sync) |
| Deployment | Vercel |

---

## Leaderboard Design

The leaderboard is the performance-critical path of the entire system. Design decisions:

```
Write path:  entry submitted → ZADD leaderboard:campaign <score> <userId>
Read path:   ZREVRANK leaderboard:campaign <userId>      → user rank (O log N)
             ZREVRANGE leaderboard:campaign 0 99          → top 100 (O log N + 100)
```

Redis sorted sets give guaranteed O(log N) rank reads regardless of leaderboard size  no full-table scans, no rank recomputation on every page load. PostgreSQL handles durable storage; Redis handles the competitive ranking layer.

Frontend rank transitions use CSS `transition` on position values smooth enough to be readable, fast enough not to feel laggy during burst updates.

---

## Performance Optimisation

Key optimisations:
- Next.js `Image` component with explicit `priority` on above-fold assets
- Route prefetching for campaign flow transitions
- Critical CSS inlined; non-critical deferred

---

## Local Development

**Prerequisites:** Node.js 18+, Supabase project, Redis instance, Better Auth config

```bash
git clone https://github.com/Faith4078/Hyundai-Creta-Web-App.git
cd Hyundai-Creta-Web-App
pnpm install
cp .env.example .env.local
pnpm dev
```

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
REDIS_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
NEXT_PUBLIC_URL=

```

---



---

## Scale Notes

- Designed and load-tested for **50,000+ concurrent users** at campaign launch
- Redis leaderboard reads remain fast under write pressure rank reads do not block on entry writes
- Supabase connection pooling via PgBouncer to handle burst DB connections at launch spike

---



