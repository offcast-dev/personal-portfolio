"use client"

import { IconLinks } from "../../../components/IconLinks";
import { Appear } from "../../../components/Appear";
import { contacts } from "@/data";

export function Greeting() {
  return (
    <Appear className="lg:absolute lg:top-[43%] xl:top-[38%]">
      <h1 className="mt-4 text-[min(11vw,84px)] font-bold leading-tight drop-shadow-[0_5px_5px_#131B2399]">
        Seva <br className="lg:hidden" /> Deriushkin
      </h1>
      <p className="mt-4 text-right text-[min(6vw,50px)] font-extralight uppercase leading-tight drop-shadow-[0_2px_2px_#131B23] lg:text-left">
        I build for the <br className="lg:hidden" /> web
      </p>

      <IconLinks
        links={contacts}
        size={32}
        className="mt-12 hidden gap-8 lg:flex"
      />
    </Appear>
  );
};
