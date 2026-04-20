"use client";

import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, Fragment, useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from "@headlessui/react";

export type Tabs = {
  placeOfWork: string;
  position: string;
  period: string;
  description: string;
  responsibilities: { title: string; description: string }[];
  href?: string;
};

export type TabsProps = ComponentPropsWithoutRef<"div"> & {
  tabs: Tabs[];
};

export function Tabs({ tabs, ...props }: TabsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div {...props}>
      <TabGroup vertical as={Fragment} selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <div className="flex min-h-[400px] flex-col gap-8 md:flex-row">
          <TabList>
            <div className="flex md:flex-col">
              {tabs.map((tab) => (
                <Tab key={tab.placeOfWork} as={Fragment}>
                  <button
                    className="cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 focus:outline-none focus-visible:bg-primary/10 md:w-full border-grey text-grey hover:border-white hover:text-white max-md:border-b md:border-r data-selected:border-primary data-selected:text-primary data-selected:max-md:border-b-4 data-selected:md:border-r-4"
                  >
                    {tab.placeOfWork}
                  </button>
                </Tab>
              ))}
            </div>
          </TabList>
          <TabPanels>
            {tabs.map((tab, panelIndex) => (
              <Transition
                key={`${tab.placeOfWork}-panel`}
                unmount={false}
                show={selectedIndex === panelIndex}
              >
                <TabPanel>
                  <div className="transition ease-out duration-300 opacity-100 translate-x-0 data-closed:opacity-0 data-closed:-translate-x-5">
                    <h3 className={`${montserrat.className} -ml-0.5 text-4xl`}>
                      {tab.position}
                      {tab.href ? (
                        <Link
                          href={tab.href}
                          target="_blank"
                          className="text-primary"
                        >{` @${tab.placeOfWork}`}</Link>
                      ) : null}
                    </h3>
                    <p className="mt-2 tracking-widest text-grey">
                      {tab.period}
                    </p>

                    <p className="mt-8 whitespace-pre-line text-justify leading-loose tracking-wide">
                      {tab.description}
                    </p>
                    <ul className="list-disc leading-loose tracking-wide">
                      {tab.responsibilities.map((responsibility) => (
                        <li key={responsibility.title} className="mt-4">
                          <span className="tracking-wide text-primary">{`${responsibility.title}: `}</span>
                          {responsibility.description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabPanel>
              </Transition>
            ))}
          </TabPanels>
        </div>
      </TabGroup>
    </div>
  );
};
