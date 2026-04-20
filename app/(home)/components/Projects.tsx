import { montserrat } from "@/app/fonts";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Image from "next/image";
import { Icon } from "@/components";
import { Project } from "@/lib";

export type ProjectsProps = ComponentPropsWithoutRef<"div"> & {
  projects: Project[];
};

const projectKindClasses: Record<
  Project["kind"],
  {
    aspect: string;
    imageBasis: string;
    contentBasis: string;
    imageFrame: string;
  }
> = {
  website: {
    aspect: "aspect-4/3",
    imageBasis: "xl:basis-1/2",
    contentBasis: "xl:basis-1/2",
    imageFrame: "border-[3px] border-grey",
  },
  app: {
    aspect: "aspect-[8/16]",
    imageBasis: "xl:basis-1/3",
    contentBasis: "xl:basis-2/3",
    imageFrame: "",
  },
};

type ProjectImageProps = {
  project: Project;
  kind: (typeof projectKindClasses)[Project["kind"]];
  /** Flex basis / width segment for the image wrapper */
  imageBasisClass: string;
  className?: string;
};

function ProjectImage({
  project,
  kind,
  imageBasisClass,
  className = "",
}: ProjectImageProps) {
  return (
    <div
      className={`relative block min-w-0 w-full xl:mt-0 ${kind.imageFrame} ${kind.aspect} ${imageBasisClass} ${className}`}
    >
      <Image
        priority={true}
        src={project.image}
        alt={project.name}
        fill
        className="object-cover"
      />
    </div>
  );
}

function ProjectHeader({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href={project.href}
        target="_blank"
        className={`${montserrat.className} -ml-0.5 w-fit text-4xl transition-colors hover:text-primary`}
      >
        {project.name}
        <span className="ml-2 inline-block">
          <Icon name="external-link" />
        </span>
      </Link>
      <div className="mt-2 flex flex-wrap gap-x-8">
        {project.tech.map((tech) => (
          <span key={tech} className="mt-2 tracking-widest text-grey">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectBodyText({
  project,
  descriptionLeadClass,
}: {
  project: Project;
  /** Space above description (title+tech live above only in the app column). */
  descriptionLeadClass: string;
}) {
  return (
    <>
      <p
        className={`whitespace-pre-line text-justify leading-loose tracking-wide ${descriptionLeadClass}`}
      >
        {project.description}
      </p>
      {project.links &&
        project.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="mt-8 flex items-center gap-2 tracking-widest text-primary-dark transition-all duration-200 hover:gap-3 hover:text-primary"
          >
            {link.label} <Icon name="arrow-right" />
          </Link>
        ))}
    </>
  );
}

export function Projects({ projects, ...props }: ProjectsProps) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-32 lg:gap-64">
        {projects.map((project) => {
          const kind = projectKindClasses[project.kind];

          if (project.kind === "app") {
            return (
              <div
                key={`${project.name}-panel`}
                className="flex w-full flex-col gap-12 md:px-16 xl:flex-row xl:items-start xl:p-0"
              >
                <ProjectImage
                  project={project}
                  kind={kind}
                  imageBasisClass={kind.imageBasis}
                  className="mt-8 xl:mt-0"
                />
                <div className={`min-w-0 w-full ${kind.contentBasis}`}>
                  <ProjectHeader project={project} />
                  <ProjectBodyText
                    project={project}
                    descriptionLeadClass="mt-12"
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={`${project.name}-panel`}
              className="flex w-full flex-col gap-12 md:px-16 xl:p-0"
            >
              <ProjectHeader project={project} />
              <div className="flex w-full flex-col gap-12 xl:flex-row xl:items-start xl:gap-12">
                <div className={`min-w-0 w-full ${kind.contentBasis}`}>
                  <ProjectBodyText
                    project={project}
                    descriptionLeadClass="mt-0"
                  />
                </div>
                <ProjectImage
                  project={project}
                  kind={kind}
                  imageBasisClass={kind.imageBasis}
                  className="mt-8 shrink-0 xl:mt-0"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
