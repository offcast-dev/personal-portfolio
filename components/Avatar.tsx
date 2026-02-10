import Image, { ImageProps } from "next/image";

export type AvatarProps = ImageProps & { size?: number };

export function Avatar({ className, size, alt, ...props }: AvatarProps) {
  return (
    <div className={`relative aspect-square ${className} `}>
      <Image
        className="rounded-full border-4 border-white bg-brand-light"
        priority={true}
        fill
        alt={alt}
        {...props}
      />
    </div>
  );
};
