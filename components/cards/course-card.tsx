import React from "react";
import { BarChart2, Clock, Layers } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface CourseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  iconLetter?: string;
  title: string;
  description: string;
  level?: string;
  duration?: string;
  modulesCount?: number | string;
  href?: string;
}

export function CourseCard({
  icon,
  iconLetter = "N",
  title,
  description,
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = "12 modules",
  className,
  ...props
}: CourseCardProps) {
  return (
    <Card hoverable className={cn("flex flex-col justify-between h-full", className)} {...props}>
      <div>
        <div className="flex items-start gap-3.5 mb-3">
          {icon ? (
            icon
          ) : (
            <div className="w-10 h-10 bg-neutral-900 text-white rounded-md flex items-center justify-center font-sans font-bold text-lg shrink-0 select-none">
              {iconLetter}
            </div>
          )}
          <div>
            <h3 className="font-sans font-semibold text-base text-neutral-900 leading-snug">
              {title}
            </h3>
          </div>
        </div>
        <p className="font-sans text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4 pt-4 border-t border-neutral-100 text-xs text-neutral-500 font-sans">
        <span className="inline-flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
          {level}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
          {duration}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 stroke-[2]" aria-hidden="true" />
          {typeof modulesCount === "number" ? `${modulesCount} modules` : modulesCount}
        </span>
      </div>
    </Card>
  );
}
