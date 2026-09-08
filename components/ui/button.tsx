"use client";

import React from "react";
import { cn } from "@/lib/utils";

import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

export const buttonBaseStyles =
  "inline-flex items-center justify-center font-sans font-medium transition-colors duration-150 rounded-md select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed";

export const buttonSizeStyles: Record<ButtonSize, string> = {
  md: "h-[44px] px-3 gap-1.5 text-sm",
  lg: "h-[44px] px-4 gap-2 text-sm",
  xl: "h-16 px-7 gap-2.5 text-[17px] rounded-md",
};

export const buttonVariantStyles: Record<ButtonVariant, (disabled?: boolean) => string> = {
  primary: (disabled) =>
    disabled
      ? "bg-primary-100 text-primary-300 shadow-none pointer-events-none"
      : "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-600 shadow-sm",
  secondary: (disabled) =>
    disabled
      ? "bg-transparent border border-primary-200 text-primary-200 pointer-events-none"
      : "bg-transparent border border-primary-500 text-primary-500 hover:bg-primary-100 active:bg-primary-200",
  tertiary: (disabled) =>
    disabled
      ? "bg-neutral-50 border border-neutral-200 text-neutral-300 pointer-events-none"
      : "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-50 active:bg-neutral-100 shadow-sm",
  text: (disabled) =>
    disabled
      ? "bg-transparent text-primary-300 pointer-events-none"
      : "bg-transparent text-primary-500 hover:text-primary-600",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "lg",
      disabled = false,
      children,
      type = "button",
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          buttonBaseStyles,
          buttonSizeStyles[size],
          buttonVariantStyles[variant](disabled),
          className
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }
);

Button.displayName = "Button";

export interface ButtonLinkProps extends React.ComponentPropsWithoutRef<typeof Link> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
}

export function ButtonLink({
  className,
  variant = "primary",
  size = "lg",
  children,
  icon,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        buttonBaseStyles,
        buttonSizeStyles[size],
        buttonVariantStyles[variant](false),
        className
      )}
      {...props}
    >
      {children}
      {icon}
    </Link>
  );
}
