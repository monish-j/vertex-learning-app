import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({
  src,
  alt = "User avatar",
  fallback = "U",
  size = "md",
  className,
  ...props
}: AvatarProps) {
  const sizeMap = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base",
  };

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden flex items-center justify-center bg-neutral-200 text-neutral-700 font-sans font-medium shrink-0 select-none border border-neutral-200/60 shadow-xs",
        sizeMap[size],
        className
      )}
      {...props}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <span aria-hidden="true">{fallback}</span>
      )}
    </div>
  );
}
