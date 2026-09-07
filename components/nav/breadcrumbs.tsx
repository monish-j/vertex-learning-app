import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps extends React.HTMLAttributes<HTMLElement> {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)} {...props}>
      <ol className="flex items-center flex-wrap gap-2 font-sans text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="inline-flex items-center gap-2">
              {index > 0 && (
                <ChevronRight
                  className="w-4 h-4 text-neutral-400 shrink-0 stroke-[2]"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span
                  className="text-neutral-500 font-normal"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="text-neutral-900 font-medium hover:text-primary-500 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-neutral-900 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
