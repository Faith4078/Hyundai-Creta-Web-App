'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  score: number;
}

interface UserRank {
  rank: number;
  score: number;
}

interface LeaderboardClientProps {
  initialEntries: LeaderboardEntry[];
  initialMe: UserRank | null;
  currentUserId: string;
}

const REFRESH_INTERVAL_MS = 10_000;

// Gold, silver, bronze for the top three ranks.
const medalColors = ['text-[#EAB308]', 'text-[#9CA3AF]', 'text-[#B45309]'];

export default function LeaderboardClient({
  initialEntries,
  initialMe,
  currentUserId,
}: LeaderboardClientProps) {
  const [entries, setEntries] = useState(initialEntries);
  const [me, setMe] = useState(initialMe);

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const res = await fetch('/api/leaderboard', { cache: 'no-store' });
        if (!res.ok) return;
        const data = await res.json();
        setEntries(data.entries);
        setMe(data.me);
      } catch {
        // Keep showing the last good data; the next tick retries.
      }
    }, REFRESH_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      dir="rtl"
      className="bg-gradient-to-br from-[#0A0A0A] via-[#111827] to-[#000] min-h-screen px-4 py-[56px] lg:py-[125px]"
    >
      <h3 className="font-cairo font-black text-center text-white text-[1.8795rem] leading-[2.11rem] lg:text-[4rem] lg:leading-[4.5rem]">
        لوحة المتصدرين
      </h3>
      <p className="text-white font-cairo font-normal text-center text-[0.7rem] leading-[0.96rem] mt-[27px] mb-[33px] lg:mt-[58px] lg:mb-[76px] lg:text-[1.5rem] lg:leading-[2.0625rem]">
        يتم تحديث الترتيب تلقائيًا — نافس على المراكز الأولى!
      </p>

      {/* current user's rank card */}
      {me && (
        <div className="max-w-[1180px] mx-auto w-full mb-[20px] lg:mb-[40px] bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
          <div className="w-full rounded-[10px] bg-[#0A0A0A] flex items-center justify-between px-[20px] py-[16px] lg:px-[70px] lg:py-[28px]">
            <p className="font-cairo text-white font-bold text-[0.90725rem] leading-[1.2475rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
              ترتيبك: {me.rank}
            </p>
            <p className="font-cairo text-[#488EFF] font-bold text-[0.90725rem] leading-[1.2475rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
              {me.score} نقطة
            </p>
          </div>
        </div>
      )}

      {/* top 100 */}
      <div className="max-w-[1180px] mx-auto w-full bg-gradient-to-r from-[#3B82F6] to-[#00FFFF] rounded-[10px] p-[1.5px]">
        <div className="w-full rounded-[10px] bg-[#0A0A0A] px-[20px] py-[20px] lg:px-[70px] lg:py-[40px]">
          {entries.length === 0 ? (
            <p className="font-cairo text-white text-center font-normal text-[0.90725rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[2.0625rem] py-[40px]">
              لا توجد نقاط بعد — كن أول المتصدرين!
            </p>
          ) : (
            <ol className="flex flex-col gap-y-[12px] lg:gap-y-[18px]">
              {entries.map((entry) => {
                const isCurrentUser = entry.userId === currentUserId;
                const rankColor =
                  medalColors[entry.rank - 1] ?? 'text-[#488EFF]';
                return (
                  <motion.li
                    key={entry.userId}
                    layout
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-[10px] flex items-center gap-x-[16px] px-[16px] py-[12px] lg:gap-x-[40px] lg:px-[27px] lg:py-[20px] transition-colors duration-300 ${
                      isCurrentUser
                        ? 'bg-[#0F1727] border-2 border-[#3B82F6]'
                        : 'bg-[linear-gradient(90deg,#0F1520_0%,#0D121D_100%)]'
                    }`}
                  >
                    <span
                      className={`font-cairo font-black text-center w-[36px] shrink-0 text-[1rem] lg:w-[64px] lg:text-[1.75rem] ${rankColor}`}
                    >
                      {entry.rank}
                    </span>
                    <span className="font-cairo text-white font-bold grow truncate text-right text-[0.90725rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
                      {entry.name}
                    </span>
                    <span className="font-cairo text-[#488EFF] font-bold shrink-0 text-[0.90725rem] leading-[1.5rem] lg:text-[1.5rem] lg:leading-[2.0625rem]">
                      {entry.score} نقطة
                    </span>
                  </motion.li>
                );
              })}
            </ol>
          )}
        </div>
      </div>
    </main>
  );
}
