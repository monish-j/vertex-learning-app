"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className,
  ...props
}: PaginationProps) {
  // Demo pages matching design sheet: 1, 2, 3, ..., 8
  return (
    <nav
      aria-label="Pagination"
      className={cn("inline-flex items-center gap-1.5 font-sans text-sm select-none", className)}
      {...props}
    >
      <button
        type="button"
        onClick={() => onPageChange?.(Math.max(currentPage - 1, 1))}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
      >
        <ChevronLeft className="w-4 h-4 stroke-[2]" aria-hidden="true" />
      </button>

      {[1, 2, 3].map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange?.(page)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "w-8 h-8 flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500",
              isActive
                ? "border border-primary-500 text-primary-500 font-semibold bg-white"
                : "text-neutral-700 hover:text-primary-500 hover:bg-neutral-50"
            )}
          >
            {page}
          </button>
        );
      })}

      <span className="w-8 h-8 flex items-center justify-center text-neutral-400 font-medium">
        ...
      </span>

      <button
        type="button"
        onClick={() => onPageChange?.(totalPages)}
        aria-current={currentPage === totalPages ? "page" : undefined}
        className={cn(
          "w-8 h-8 flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500",
          currentPage === totalPages
            ? "border border-primary-500 text-primary-500 font-semibold bg-white"
            : "text-neutral-700 hover:text-primary-500 hover:bg-neutral-50"
        )}
      >
        {totalPages}
      </button>

      <button
        type="button"
        onClick={() => onPageChange?.(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="w-8 h-8 flex items-center justify-center rounded-md text-neutral-500 hover:text-neutral-900 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500"
      >
        <ChevronRight className="w-4 h-4 stroke-[2]" aria-hidden="true" />
      </button>
    </nav>
  );
}
