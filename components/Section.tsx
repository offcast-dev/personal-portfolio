"use client";

import useIsVisible from "@/hooks/useIsVisible";
import { Transition } from "@headlessui/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  id: string;
};

const Section = ({ id, children, className, ...props }: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const show = useRef<boolean>(false);
  const isVisible = useIsVisible(sectionRef.current);

  function alwaysShowSection() {
    show.current = true;
  }

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`mx-auto mb-[min(24rem,20vh)] flex min-h-[min(650px,100vh)] max-w-5xl scroll-m-[20vh] ${className}`}
      {...props}
    >
      <Transition
        show={isVisible || show.current}
        beforeEnter={alwaysShowSection}
        unmount={false}
        appear
      >
        <div className="hidden w-full lg:block transition ease-in-out duration-1000 data-closed:opacity-0 data-closed:translate-y-20">
          {children}
        </div>
      </Transition>

      <div className="lg:hidden">{children}</div>
    </section>
  );
};

export default Section;
