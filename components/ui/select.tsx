import React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], children, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center w-full", className)}>
        <select
          ref={ref}
          className="w-full h-[44px] pl-4 pr-10 py-2 appearance-none font-sans text-sm font-medium text-neutral-900 bg-white border border-neutral-200 rounded-md cursor-pointer transition-colors duration-150 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
          {...props}
        >
          {options.length > 0
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <ChevronDown
          className="absolute right-3.5 w-4 h-4 text-neutral-500 pointer-events-none stroke-[2]"
          aria-hidden="true"
        />
      </div>
    );
  }
);

Select.displayName = "Select";
