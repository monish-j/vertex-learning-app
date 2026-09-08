import React from "react";
import Link from "next/link";
import { Bell } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface SiteHeaderProps extends React.HTMLAttributes<HTMLElement> {
  activeHref?: string;
}

export function SiteHeader({ activeHref, className, ...props }: SiteHeaderProps) {
  const navItems = [
    { label: "Courses", href: "/courses" },
    { label: "My Learning", href: "/my-learning" },
  ];

  return (
    <header
      className={cn(
        "h-20 sm:h-24 px-6 sm:px-10 border-b border-[#F0E7E0] flex items-center justify-between bg-[#FBF8F5] relative z-10",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-8 sm:gap-10">
        <Link
          href="/"
          className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-md"
          aria-label="Vertex Home"
        >
          <Logo size="md" />
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "font-sans text-[15px] font-medium transition-colors duration-150 rounded px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",
                  isActive
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-900 hover:text-primary-500"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          aria-label="Notifications"
          className="w-10 h-10 flex items-center justify-center rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          <Bell className="w-5 h-5 stroke-[1.75]" aria-hidden="true" />
        </button>

        <Link
          href="/profile"
          className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          aria-label="User profile"
        >
          <Avatar size="lg" fallback="M" />
        </Link>
      </div>
    </header>
  );
}
