export type PropsWithClassName<T> = T & {
  className?: string;
};

export type Project = {
  name: string;
  href: string;
  image: string;
  /** Website: 4/3 image, half width. App: portrait (mobile) aspect, third width. */
  kind: "website" | "app";
  description: string;
  tech: string[];
  links?: { label: string; href: string }[];
};
