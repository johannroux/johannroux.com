import Image from "next/image";
import {cn} from "@/lib/cn";
import type {SitePhoto} from "@/lib/photos";

export function PhotoBanner({
  photo,
  className,
  priority = false,
}: Readonly<{
  photo: SitePhoto;
  className?: string;
  priority?: boolean;
}>) {
  const caption = [
    ...(photo.location ? [photo.location] : []),
    `Photo © ${photo.credit}`,
  ].join(" · ");

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface shadow-soft",
        "group",
        className,
      )}
    >
      <div className="relative h-40 w-full sm:h-48">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 640px) 768px, 100vw"
          className="object-cover"
          priority={priority}
          loading={priority ? "eager" : undefined}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent"
        />
      </div>

      <figcaption className="absolute bottom-2 right-2 select-none text-[10px] font-medium tracking-tight text-muted/70">
        <span className="sr-only">{caption}</span>
        <span
          aria-hidden="true"
          className={cn(
            "rounded-full bg-background/35 px-2 py-1 backdrop-blur",
            "opacity-35 transition-opacity duration-200",
            "group-hover:opacity-90 group-focus-within:opacity-90",
          )}
        >
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
