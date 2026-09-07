import React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  showShortcut?: boolean;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  (
    {
      className,
      placeholder = "Search anything...",
      showShortcut = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <Search
          className="absolute left-3.5 w-5 h-5 text-neutral-500 pointer-events-none stroke-[2]"
          aria-hidden="true"
        />
        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className="w-full h-[44px] pl-11 pr-14 py-2 font-sans text-sm text-neutral-900 bg-white placeholder:text-neutral-400 border border-neutral-200 rounded-md transition-colors duration-150 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
          {...props}
        />
        {showShortcut && (
          <span className="absolute right-3 inline-flex items-center justify-center px-1.5 py-0.5 font-sans text-xs font-medium text-neutral-500 bg-neutral-100 border border-neutral-200 rounded select-none pointer-events-none">
            ⌘ K
          </span>
        )}
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";
