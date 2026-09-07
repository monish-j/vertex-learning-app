import React from "react";
import { CheckCircle2, Lock, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType;
  label?: string;
  showLabel?: boolean;
}

export function StatusIndicator({
  status,
  label,
  showLabel = true,
  className,
  ...props
}: StatusIndicatorProps) {
  const defaultLabels: Record<StatusType, string> = {
    "in-progress": "In Progress",
    completed: "Completed",
    "now-playing": "Now Playing",
    locked: "Locked",
  };

  const displayLabel = label ?? defaultLabels[status];

  const renderIcon = () => {
    switch (status) {
      case "in-progress":
        return (
          <span className="relative flex items-center justify-center w-5 h-5" aria-hidden="true">
            <svg className="w-5 h-5 -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="9"
                className="stroke-neutral-200 fill-none"
                strokeWidth="2.5"
              />
              <circle
                cx="12"
                cy="12"
                r="9"
                className="stroke-primary-500 fill-none"
                strokeWidth="2.5"
                strokeDasharray="56.5"
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>
          </span>
        );
      case "completed":
        return (
          <CheckCircle2
            className="w-5 h-5 text-emerald-600 stroke-[2.2]"
            aria-hidden="true"
          />
        );
      case "now-playing":
        return (
          <PlayCircle
            className="w-5 h-5 text-primary-500 fill-primary-500 stroke-white stroke-[1.5]"
            aria-hidden="true"
          />
        );
      case "locked":
        return (
          <Lock
            className="w-5 h-5 text-neutral-500 stroke-[2]"
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 font-sans text-sm font-medium text-neutral-900 select-none",
        className
      )}
      {...props}
    >
      {renderIcon()}
      {showLabel && <span>{displayLabel}</span>}
    </div>
  );
}
