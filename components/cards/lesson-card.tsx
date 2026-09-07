"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface LessonCardProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeLabel?: string;
  title: string;
  description: string;
  moduleLabel?: string;
  onView?: () => void;
  href?: string;
}

export function LessonCard({
  badgeLabel = "LESSON",
  title,
  description,
  moduleLabel = "Module 5",
  onView,
  className,
  ...props
}: LessonCardProps) {
  return (
    <Card hoverable className={cn("flex flex-col justify-between h-full", className)} {...props}>
      <div>
        <div className="mb-3">
          <Badge variant="lesson">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-base text-neutral-900 leading-snug mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs font-sans">
        <span className="text-neutral-500">{moduleLabel}</span>
        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center gap-1.5 font-medium text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded"
        >
          <span>View lesson</span>
          <ExternalLink className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
        </button>
      </div>
    </Card>
  );
}
