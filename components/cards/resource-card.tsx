import React from "react";
import { FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface ResourceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  description: string;
  fileType?: string;
  fileSize?: string;
  href?: string;
}

export function ResourceCard({
  icon,
  title,
  description,
  fileType = "PDF",
  fileSize = "1.2 MB",
  href,
  className,
  ...props
}: ResourceCardProps) {
  return (
    <Card hoverable className={cn("flex flex-col justify-between h-full", className)} {...props}>
      <div>
        <div className="flex items-start gap-3 mb-2">
          {icon ? (
            icon
          ) : (
            <FileText className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5 stroke-[2]" aria-hidden="true" />
          )}
          <h3 className="font-sans font-semibold text-base text-neutral-900 leading-snug">
            {title}
          </h3>
        </div>
        <p className="font-sans text-sm text-neutral-500 line-clamp-2 leading-relaxed ml-8 mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs font-sans">
        <span className="text-neutral-500">
          {fileType} · {fileSize}
        </span>
        <a
          href={href || "#"}
          aria-label={`Open ${title}`}
          className="text-primary-500 hover:text-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-500 rounded"
        >
          <ExternalLink className="w-4 h-4 stroke-[2]" aria-hidden="true" />
        </a>
      </div>
    </Card>
  );
}
