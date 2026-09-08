import React from "react";
import { cn } from "@/lib/utils";

export function NextJsMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-black text-white flex items-center justify-center font-sans font-black text-3xl select-none shadow-sm",
        className
      )}
      aria-label="Next.js"
    >
      <span>N</span>
    </div>
  );
}

export function DockerMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center select-none shadow-sm relative overflow-hidden",
        className
      )}
      style={{ backgroundColor: "#F0F8FF" }}
      aria-label="Docker"
    >
      <svg
        width="54"
        height="40"
        viewBox="0 0 54 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-10"
      >
        {/* Whale body */}
        <path
          d="M48 20C45.5 17 41.5 16 38.5 16.5C37 12 33 9 28 9H13V18C10 18 7 20 5 23C3 26 3.5 30 6.5 32.5C10.5 35.5 25 36.5 37 35C45 34 50 28 51 25C51 24.5 50.5 23.5 48 20Z"
          fill="#0092E6"
          stroke="#005B94"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Eye */}
        <circle cx="11" cy="24" r="1.5" fill="#00395C" />
        {/* Spout */}
        <path
          d="M44 14C45 11 47 9 50 8.5"
          stroke="#0092E6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Containers */}
        {/* Row 1 */}
        <rect x="23" y="10" width="4.5" height="4" rx="0.5" fill="#00D2D3" stroke="#005B94" strokeWidth="1" />
        {/* Row 2 */}
        <rect x="17.5" y="14.5" width="4.5" height="4" rx="0.5" fill="#00D2D3" stroke="#005B94" strokeWidth="1" />
        <rect x="23" y="14.5" width="4.5" height="4" rx="0.5" fill="#54A0FF" stroke="#005B94" strokeWidth="1" />
        <rect x="28.5" y="14.5" width="4.5" height="4" rx="0.5" fill="#00D2D3" stroke="#005B94" strokeWidth="1" />
        {/* Row 3 */}
        <rect x="12" y="19" width="4.5" height="4" rx="0.5" fill="#54A0FF" stroke="#005B94" strokeWidth="1" />
        <rect x="17.5" y="19" width="4.5" height="4" rx="0.5" fill="#00D2D3" stroke="#005B94" strokeWidth="1" />
        <rect x="23" y="19" width="4.5" height="4" rx="0.5" fill="#54A0FF" stroke="#005B94" strokeWidth="1" />
        <rect x="28.5" y="19" width="4.5" height="4" rx="0.5" fill="#00D2D3" stroke="#005B94" strokeWidth="1" />
        <rect x="34" y="19" width="4.5" height="4" rx="0.5" fill="#54A0FF" stroke="#005B94" strokeWidth="1" />
      </svg>
    </div>
  );
}

export function TypeScriptMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl flex items-center justify-center font-sans font-bold text-2xl text-white select-none shadow-sm",
        className
      )}
      style={{ backgroundColor: "#2D79C7" }}
      aria-label="TypeScript"
    >
      <span>TS</span>
    </div>
  );
}
