import React from "react";
import { cn } from "@/lib/utils";

export interface PageFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function PageFrame({ children, className, ...props }: PageFrameProps) {
  return (
    <div
      className="w-full min-h-screen relative"
      style={{
        backgroundColor: "#FBF8F5",
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          #FBF8F5,
          #FBF8F5 12px,
          #F2EBE5 12px,
          #F2EBE5 13px
        )`,
      }}
    >
      <div
        className={cn(
          "w-full max-w-[960px] mx-auto min-h-screen bg-[#FBF8F5] border-x border-[#F0E7E0] flex flex-col relative",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}
