import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef, FC } from "react";

export type ButtonLinkProps = ComponentPropsWithoutRef<"a"> & LinkProps;

export function ButtonLink({ className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={`rounded-md border-2 border-primary px-4 py-2 font-medium
  text-primary transition-all duration-200 hover:-translate-x-[3px]
  hover:-translate-y-[3px] hover:shadow-[4px_4px_0_0_var(--color-primary-dark)] ${className}`}
      target="_blank"
      {...props}
    />
  )
}
