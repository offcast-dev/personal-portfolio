import Link, { LinkProps } from "next/link";
import { Icon, type IconName } from "@/components/Icon";

export type IconLinkProps = LinkProps & { name: IconName; size?: number };

export function IconLink({ name, size = 24, ...props }: IconLinkProps) {
  return (
    <Link className="relative" style={{ height: size, width: size }} {...props}>
      <Icon
        name={name}
        width={size}
        height={size}
        className={`absolute left-0 top-0 text-white-dark
        drop-shadow-[0_2px_2px_var(--color-brand-dark)] transition-all 
        duration-200 hover:scale-110 hover:text-primary
        hover:opacity-100 hover:drop-shadow-[0_5px_5px_var(--color-brand-dark)] `}
      />
    </Link>
  );
};

