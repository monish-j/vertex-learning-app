import React from "react";
import { cn } from "@/lib/utils";

export function ChartDecoration({ className }: { className?: string }) {
  // Bar heights in % or px for the two clusters (left cluster and right cluster)
  const leftBars = [
    { height: "45%", opacity: "0.25", width: "w-8 sm:w-12" },
    { height: "65%", opacity: "0.35", width: "w-8 sm:w-12" },
    { height: "85%", opacity: "0.45", width: "w-8 sm:w-14" },
    { height: "100%", opacity: "0.55", width: "w-9 sm:w-14" },
    { height: "70%", opacity: "0.4", width: "w-8 sm:w-12" },
    { height: "50%", opacity: "0.3", width: "w-7 sm:w-10" },
    { height: "35%", opacity: "0.2", width: "w-6 sm:w-8" },
  ];

  const rightBars = [
    { height: "30%", opacity: "0.2", width: "w-6 sm:w-8" },
    { height: "55%", opacity: "0.3", width: "w-7 sm:w-10" },
    { height: "75%", opacity: "0.45", width: "w-8 sm:w-12" },
    { height: "95%", opacity: "0.55", width: "w-9 sm:w-14" },
    { height: "80%", opacity: "0.4", width: "w-8 sm:w-14" },
    { height: "60%", opacity: "0.35", width: "w-8 sm:w-12" },
    { height: "40%", opacity: "0.25", width: "w-7 sm:w-10" },
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full h-48 sm:h-64 overflow-hidden pointer-events-none select-none",
        className
      )}
    >
      {/* Left cluster */}
      <div className="absolute left-0 bottom-0 flex items-end gap-1.5 sm:gap-2 h-full pl-2 sm:pl-4 filter blur-[12px] sm:blur-[16px] opacity-70">
        {leftBars.map((bar, idx) => (
          <div
            key={`left-${idx}`}
            className={cn("rounded-t-lg", bar.width)}
            style={{
              height: bar.height,
              background: `linear-gradient(to top, rgba(249, 115, 22, ${bar.opacity}), rgba(254, 215, 170, 0))`,
            }}
          />
        ))}
      </div>

      {/* Right cluster */}
      <div className="absolute right-0 bottom-0 flex items-end gap-1.5 sm:gap-2 h-full pr-2 sm:pr-4 filter blur-[12px] sm:blur-[16px] opacity-70">
        {rightBars.map((bar, idx) => (
          <div
            key={`right-${idx}`}
            className={cn("rounded-t-lg", bar.width)}
            style={{
              height: bar.height,
              background: `linear-gradient(to top, rgba(249, 115, 22, ${bar.opacity}), rgba(254, 215, 170, 0))`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
