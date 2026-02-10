"use client";

import { ComponentPropsWithoutRef, Fragment, useState } from "react";
import { NavigationLink, type NavigationLinkProps } from "./NavigationLink";
import { Icon } from "./Icon";
import { Dialog, DialogPanel, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import { useAnchorTag } from "@/hooks/useAnchorTag";

export type NavigationProps = ComponentPropsWithoutRef<"div"> & {
  links: NavigationLinkProps[];
};

export function Navigation({ links, ...props }: NavigationProps) {
  let [isOpen, setIsOpen] = useState(false);
  const [anchorTag, setAnchorTag] = useAnchorTag();

  return (
    <div {...props}>
      <div className="hidden gap-4 sm:gap-8 md:flex">
        {links.map((link) => (
          <NavigationLink
            key={link.href.toString()}
            active={!!anchorTag && link.href.toString().includes(anchorTag)}
            onClick={() => setAnchorTag(link.href.toString().split("#")[1])}
            {...link}
          />
        ))}
      </div>
      <div className="md:hidden">
        <button className="p-8" onClick={() => setIsOpen(true)}>
          <Icon name="hamburger" width={36} height={36} />
        </button>

        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <TransitionChild as={Fragment}>
            <div
              className="fixed inset-0 z-20 bg-black/30 transition ease-out duration-200 opacity-100 data-closed:opacity-0"
              aria-hidden="true"
            />
          </TransitionChild>

          <TransitionChild as={Fragment}>
            <DialogPanel className="fixed right-0 top-0 z-20 h-screen w-[min(100vw,300px)] border-l-2 border-l-grey bg-linear-to-b from-brand-light to-brand-dark transition ease-out duration-300 opacity-100 translate-x-0 data-[closed]:opacity-0 data-[closed]:translate-x-full">
              <div className="flex h-24 w-full justify-end border-b border-b-grey border-opacity-10 p-3">
                <button onClick={() => setIsOpen(false)}>
                  <Icon name="close" width={32} height={32} />
                </button>
              </div>

              {links.map((link) => (
                <div
                  key={link.href.toString()}
                  className="w-full border-b border-b-grey border-opacity-10 p-3 text-right uppercase"
                >
                  <Link
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    {...link}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </div>
    </div>
  );
};
