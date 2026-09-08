import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  showShortcut?: boolean;
  size?: "md" | "lg";
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      placeholder = "Search anything...",
      showShortcut = true,
      size = "md",
      ...props
    },
    ref
  ) => {
    const isLg = size === "lg";

    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <Search
          className={cn(
            "absolute text-neutral-400 pointer-events-none stroke-[2]",
            isLg
              ? "left-5 sm:left-6 w-6 h-6 sm:w-7 sm:h-7"
              : "left-3.5 w-5 h-5 text-neutral-500"
          )}
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={cn(
            "w-full font-sans text-neutral-900 bg-white placeholder:text-neutral-400 border border-neutral-200 transition-colors duration-150 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400",
            isLg
              ? "h-16 sm:h-[76px] pl-14 sm:pl-16 pr-16 sm:pr-20 text-base sm:text-[18px] rounded-[16px] shadow-sm"
              : "h-[44px] pl-11 pr-14 py-2 text-sm rounded-md"
          )}
          {...props}
        />
        {showShortcut && (
          <span
            className={cn(
              "absolute inline-flex items-center justify-center font-sans font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 select-none pointer-events-none",
              isLg
                ? "right-4 sm:right-6 px-3 py-1.5 text-sm rounded-lg text-neutral-700 bg-neutral-50"
                : "right-3 px-1.5 py-0.5 text-xs rounded"
            )}
          >
            ⌘ K
          </span>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
