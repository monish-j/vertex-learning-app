import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "video" | "lesson" | "popular";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({
  className,
  variant = "video",
  children,
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    video: "bg-primary-100 text-primary-500",
    lesson: "bg-[#EEF0FE] text-[#4F46E5]",
    popular: "bg-primary-100 text-primary-500",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-sans font-semibold text-[11px] leading-tight tracking-wider uppercase px-2.5 py-1 rounded-[6px] select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
