"use client";

import { ComponentPropsWithoutRef, useRef } from "react";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  id: string;
};

export function Section({ id, children, className, ...props }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`mx-auto mb-[min(24rem,20vh)] flex min-h-[min(650px,100vh)] max-w-5xl scroll-m-[20vh] ${className}`}
      {...props}
    >
        {children}
    </section>
  );
};
