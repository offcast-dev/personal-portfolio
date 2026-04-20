import { IconLinks } from "./IconLinks";
import { contacts } from "@/data";
import { twMerge } from "tailwind-merge";

export function AppFooter() {
  return (
    <footer
      className={twMerge(
        "fixed bottom-0 left-0 hidden h-24 w-full md:flex",
        "items-center justify-center border-t-2",
        "border-[#a4b0bd] border-opacity-5",
        "bg-linear-to-l from-[#1a252f] to-[#141c24]",
      )}
    >
      <IconLinks links={contacts} size={24} />
    </footer>
  );
}
