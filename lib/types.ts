export type PropsWithClassName<T> = T & {
  className?: string;
};

export type Project = {
  name: string;
  href: string;
  image: string;
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};
