import React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  className,
  showText = true,
  size = "md",
}: LogoProps) {
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      {/* Vertex downward triangle glyph with inner notch */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(iconSizes[size], "shrink-0")}
        aria-hidden="true"
      >
        <path
          d="M3 4H29L16 29L3 4Z"
          fill="#F97316"
        />
        <path
          d="M8.5 6.5H23.5L16 21.5L8.5 6.5Z"
          fill="#FFFFFF"
        />
        <path
          d="M11.5 6.5H20.5L16 15.5L11.5 6.5Z"
          fill="#F97316"
        />
      </svg>
      {showText && (
        <span className={cn("font-display font-bold text-neutral-900 tracking-tight", textSizes[size])}>
          Vertex
        </span>
      )}
    </div>
  );
}
