import "./globals.css";
import type { Metadata } from "next";
import { IconLinks, Navigation, ButtonLink } from "@/components";
import { fira_mono } from "@/app/fonts";
import { contacts, navigation } from "@/data";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Seva Deriushkin",
  description:
    "Senior Frontend Developer in Gothenburg, Sweden (Remote). React, Next.js, React Native, enterprise UIs at global scale.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fira_mono.className}>
        <header
          className={twMerge("sticky top-0 z-10 flex h-24 w-full",
            "flex-row-reverse items-center justify-between border-b-2 border-[#a4b0bd] border-opacity-5",
            "bg-linear-to-l from-brand-light to-[#1a242e]",
            "md:flex-row md:justify-center"
          )}
        >
          <Navigation
            links={navigation}
          />
          <ButtonLink className="ml-8" href="/api/cv">Resume</ButtonLink>
        </header>
        <main className="container mx-auto px-8">{children}</main>
        <footer
          className={twMerge("hidden md:flex fixed bottom-0 left-0 h-24 w-full",
            "items-center justify-center border-t-2",
            "border-[#a4b0bd] border-opacity-5",
            "bg-linear-to-l from-[#1a252f] to-[#141c24]",
            "md:flex"
          )}
        >
          <IconLinks links={contacts} size={24} />
        </footer>
      </body>
    </html>
  );
}
