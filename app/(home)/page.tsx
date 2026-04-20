import { montserrat } from "@/app/fonts";
import { Avatar, Section, Tabs, IconLinks } from "@/components";
import { contacts, jobs, projects } from "@/data";
import Image from "next/image";
import { Greeting } from "./components/Greeting";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className={`${montserrat.className} max-w-9xl relative mx-auto flex min-h-[calc(100vh-6rem)] scroll-m-[25vh] flex-col justify-center`}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
          style={{
            maskImage: "linear-gradient(to top, transparent 0%, white 32%)",
            WebkitMaskImage: "linear-gradient(to top, transparent 0%, white 32%)",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Image
            src="/seva-main.webp"
            alt="Seva Deriushkin"
            priority={true}
            fill
            className="object-cover object-left lg:object-contain lg:object-right"
          />
        </div>
        <Avatar
          src="/seva-avatar-large.webp"
          alt="Seva Deriushkin"
          className="mx-auto mt-12 w-[min(80vw,40vh)] lg:hidden"
        />
        <Greeting />
      </section>

      <Section id="projects" className="max-w-6xl min-h-[1800px] mt-32">
        <div className="my-auto w-full">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            My Projects
          </h2>

          <Projects projects={projects} className="mt-16" />
        </div>
      </Section>

      <Section id="experience" className="max-w-[90ch] min-h-[1100px]">
        <div className="my-auto gap-12">
          <h2 className={`${montserrat.className} text-5xl font-bold`}>
            Work experience
          </h2>

          <Tabs tabs={jobs} className="mt-16" />
        </div>
      </Section>

      <Section id="about" className="max-w-2xl xl:max-w-5xl min-h-[750px]">
        <div className="my-auto flex h-full gap-12">
          <div className="text-justify text-lg tracking-wider xl:basis-[55%]">
            <h2 className={`${montserrat.className} text-5xl font-bold`}>
              About me
            </h2>
            <p className="mt-8 leading-loose">
              I&apos;m a senior frontend developer based in Gothenburg, building
              web and mobile UIs with React, Next.js, and React Native. I focus
              on delivering great user experience, performance and accessibility, 
              while keeping the codebase clean and maintainable.
              </p>
              <p className="mt-8 leading-loose">
              My focus is to keep the work environemnt productive, enjoyable and less 
              stressful for everyone. I try to achive that by taking my responsibilities seriously so people can rely on me,
              focusing on maintaining a good DX, communicating clearly and honestly even if it 
              is not easy, and being self-driven and proactive with improvements and new ideas.
            </p>

            <p className="mt-8 leading-loose">
              I started out in physics and research, then moved into a software 
              development. Some of the tools I reach for most often:
            </p>
            <ul className="mt-8 list-disc columns-[220px] pl-4 text-primary">
              <li>TypeScript</li>
              <li>Next.js &amp; React</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
              <li>Calude Code &amp; Cursor</li>
              <li>Figma</li>
              <li>Cypress</li>
            </ul>
          </div>
          <div className="relative hidden basis-[45%] xl:block">
            <Image
              src="/about-me.webp"
              alt="Seva Deriushkin"
              priority={true}
              fill
              className="border-4 border-primary object-cover object-top shadow-[10px_10px_0_0_var(--color-primary-dark)]"
            />
          </div>
        </div>
      </Section>

      <Section
        id="contact"
        className="max-w-xl items-center justify-center scroll-m-18! mb-16 md:mb-24"
      >
        <div className="flex flex-col flex-wrap items-center gap-16 md:flex-row md:gap-8">
          <Avatar
            src="/seva-avatar-small.webp"
            alt="Seva Deriushkin"
            className="w-48 grow-0"
          />
          <h2
            className={`${montserrat.className} grow my-auto text-center text-4xl font-light tracking-widest sm:text-5xl`}
          >
            Get in touch
          </h2>
          <IconLinks
            links={contacts}
            size={32}
            className="mx-auto flex grow-0 flex-col gap-8"
          />
        </div>
      </Section>
    </>
  );
}
