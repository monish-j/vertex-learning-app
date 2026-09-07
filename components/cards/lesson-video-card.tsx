"use client";

import React from "react";
import { PlayCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface LessonVideoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  badgeLabel?: string;
  title: string;
  description: string;
  lessonNumber?: string;
  timestamp?: string;
  onWatch?: () => void;
  href?: string;
}

export function LessonVideoCard({
  badgeLabel = "VIDEO",
  title,
  description,
  lessonNumber = "Lesson 5.1",
  timestamp = "12:45",
  onWatch,
  className,
  ...props
}: LessonVideoCardProps) {
  return (
    <Card hoverable className={cn("flex flex-col justify-between h-full", className)} {...props}>
      <div>
        <div className="mb-3">
          <Badge variant="video">{badgeLabel}</Badge>
        </div>
        <h3 className="font-sans font-semibold text-base text-neutral-900 leading-snug mb-2">
          {title}
        </h3>
        <p className="font-sans text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs font-sans">
        <span className="text-neutral-500">
          {lessonNumber} · {timestamp}
        </span>
        <button
          type="button"
          onClick={onWatch}
          className="inline-flex items-center gap-1.5 font-medium text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded"
        >
          <PlayCircle className="w-4 h-4 stroke-[2]" aria-hidden="true" />
          <span>Watch from {timestamp}</span>
        </button>
      </div>
    </Card>
  );
}
