import { IconLink, type IconLinkProps } from "./IconLink";
import { ComponentPropsWithoutRef } from "react";

export type IconLinksProps = ComponentPropsWithoutRef<"div"> & {
  links: IconLinkProps[];
  size?: number,
};

export function IconLinks({ links, size, ...props }: IconLinksProps) {
  return (
    <div className="flex gap-8" {...props}>
      {links.map((link) => (
        <IconLink key={link.name} size={size} {...link} />
      ))}
    </div>
  );
};
