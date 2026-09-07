import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0 to 100
  showLabel?: boolean;
  labelSuffix?: string;
}

export function ProgressBar({
  value,
  showLabel = true,
  labelSuffix = "complete",
  className,
  ...props
}: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={cn("flex items-center gap-4 w-full", className)} {...props}>
      <div
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Progress: ${clampedValue}%`}
        className="relative flex-1 h-2 bg-neutral-100 rounded-full overflow-hidden"
      >
        <div
          className="h-full bg-primary-500 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="font-sans text-sm text-neutral-500 whitespace-nowrap select-none">
          <strong className="font-semibold text-neutral-900">{clampedValue}%</strong>{" "}
          {labelSuffix}
        </span>
      )}
    </div>
  );
}
