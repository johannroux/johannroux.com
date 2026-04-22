import * as React from "react";
import {cn} from "@/lib/cn";

export function KhonsuLogo({
  className,
  title = "Khonsu Development",
  ...props
}: Readonly<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>) {
  const titleId = React.useId();
  const hasTitle = title.trim().length > 0;

  return (
    <svg
      viewBox="0 0 275 275"
      aria-hidden={hasTitle ? undefined : true}
      aria-labelledby={hasTitle ? titleId : undefined}
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-6 w-6", className)}
      {...props}
    >
      {hasTitle ? <title id={titleId}>{title}</title> : null}
      <ellipse
        cx="137.398"
        cy="137.615"
        rx="124.169"
        ry="124.156"
        fill="#4d4d4d"
      />
      <path
        d="m137.781 21.77-26.09 15 26.09 15 26.09-15zm-34.78 20-26.09 15 60.87 35 60.87-35-26.09-15-34.78 20zm-34.79 20-26.08 15 95.65 55 95.65-55-26.08-15-69.57 40zm-30.43 22.5v30l100 57.5 100-57.5v-30l-100 57.5zm0 40v30l65.22 37.5 26.08-15zm200 0-69.5 39.96v.04l-56.55 32.52-8.66 4.98-26.09 15 26.09 15 100-57.5v-.04l34.71-19.96zm-200 40v30l30.43 17.5 26.1-15zm200 0-100 57.5-26.09 15 26.09 15 100-57.5z"
        fill="#fff"
      />
    </svg>
  );
}
