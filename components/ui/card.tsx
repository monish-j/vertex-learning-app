import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-neutral-200 rounded-lg shadow-sm p-6 transition-all duration-150",
        hoverable && "hover:shadow-md hover:border-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
