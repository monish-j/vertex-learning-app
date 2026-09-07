import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { cn } from "@/lib/utils";

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  items?: NavItem[];
}

export function Navbar({
  items = [
    { label: "Courses", href: "#", active: true },
    { label: "My Learning", href: "#", active: false },
  ],
  className,
  ...props
}: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex items-center justify-between px-6 py-4 bg-white border-b border-neutral-100",
        className
      )}
      aria-label="Main Navigation"
      {...props}
    >
      <Link href="/" className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded">
        <Logo size="md" />
      </Link>

      <div className="flex items-center gap-8">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "font-sans text-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded px-1 py-0.5",
              item.active
                ? "text-primary-500 font-semibold"
                : "text-neutral-900 font-medium hover:text-primary-500"
            )}
            aria-current={item.active ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
