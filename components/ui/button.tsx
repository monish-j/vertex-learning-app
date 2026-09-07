"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  asAnchor?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      disabled = false,
      children,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-medium text-sm transition-colors duration-150 rounded-md select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

    const sizeStyles: Record<ButtonSize, string> = {
      md: "h-[44px] px-3 gap-1.5",
      lg: "h-[44px] px-4 gap-2",
    };

    const variantStyles: Record<ButtonVariant, string> = {
      primary: disabled
        ? "bg-primary-100 text-primary-300 shadow-none pointer-events-none"
        : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600",
      secondary: disabled
        ? "bg-transparent border border-primary-200 text-primary-200 pointer-events-none"
        : "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-100 active:bg-primary-200",
      tertiary: disabled
        ? "bg-neutral-50 border border-neutral-200 text-neutral-300 pointer-events-none"
        : "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100",
      text: disabled
        ? "bg-transparent text-primary-300 pointer-events-none"
        : "bg-transparent text-primary-500 hover:text-primary-600",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
