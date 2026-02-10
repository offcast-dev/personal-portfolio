"use client";

import { PropsWithClassName } from "@/lib";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type AppearProps = PropsWithClassName<{
  children: React.ReactNode;
}>;

export function Appear({ children, className }: AppearProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Transition
      show={isVisible}
      as={Fragment}
    >
      <div className={twMerge(
        "transition ease-out duration-1000 opacity-100 translate-y-0",
        "data-closed:opacity-0 data-closed:translate-y-20",
        className
      )}>
        {children}
      </div>
    </Transition>
  );
}
