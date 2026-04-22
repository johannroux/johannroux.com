import * as React from "react";
import Image from "next/image";
import {cn} from "@/lib/cn";

export function FitPrimersLogo({
  className,
  title = "FitPrimers",
  ...props
}: Readonly<
  Omit<React.ComponentProps<typeof Image>, "src" | "alt"> & {
    title?: string;
    gradient?: "brand" | "silver" | "gold";
  }
>) {
  const hasTitle = title.trim().length > 0;

  return (
    <Image
      src="/icons/fitprimers.png"
      alt={hasTitle ? title : ""}
      aria-hidden={hasTitle ? undefined : true}
      title={hasTitle ? title : undefined}
      width={1024}
      height={1024}
      className={cn("h-6 w-6", className)}
      {...props}
    />
  );
}
