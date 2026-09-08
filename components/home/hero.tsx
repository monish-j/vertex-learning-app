import React from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { SearchInput } from "@/components/ui/search-input";
import { cn } from "@/lib/utils";

export function Hero({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex flex-col items-center text-center px-6 sm:px-12 pt-14 sm:pt-16 pb-14 sm:pb-16 max-w-3xl mx-auto w-full",
        className
      )}
      {...props}
    >
      {/* Eyebrow badge */}
      <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary-200/80 bg-primary-100/40 text-primary-500 font-sans text-xs font-semibold tracking-[0.14em] uppercase mb-6 select-none">
        INTELLIGENT LEARNING
      </div>

      {/* Main heading */}
      <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[58px] leading-[1.12] text-neutral-900 tracking-tight mb-5 max-w-2xl">
        Search your learning
        <br />
        in plain English.
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-base sm:text-[18px] leading-relaxed text-neutral-500 max-w-lg mb-8">
        Vertex understands what you want to learn and
        <br className="hidden sm:inline" /> finds the exact lessons across all your courses.
      </p>

      {/* CTA Button */}
      <div className="mb-10 sm:mb-12">
        <ButtonLink
          href="/courses"
          variant="primary"
          size="xl"
          className="shadow-md hover:shadow-lg transition-all duration-150 rounded-xl"
          icon={<ArrowRight className="w-5 h-5 ml-1 stroke-[2.25]" aria-hidden="true" />}
        >
          Explore Courses
        </ButtonLink>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-[720px]">
        <SearchInput
          size="lg"
          placeholder="Ask anything about your learning..."
          aria-label="Search learning content"
        />
      </div>
    </section>
  );
}
