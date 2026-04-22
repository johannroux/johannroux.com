import Link from "next/link";
import { cn } from "@/lib/cn";

type CommonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
};

export function Button(
  props:
    | (CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
    | (CommonProps & { href: string; external?: boolean }),
) {
  const variant = "variant" in props && props.variant ? props.variant : "primary";
  const className =
    "className" in props && props.className ? props.className : undefined;

  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium",
    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  );

  const styles =
    variant === "primary"
      ? cn(
          "bg-foreground text-background",
          "hover:bg-foreground/90",
        )
      : cn(
          "border border-border bg-surface text-foreground",
          "hover:bg-foreground/5",
        );

  const finalClassName = cn(base, styles, className);

  if ("href" in props) {
    const { href, external, children } = props;
    return (
      <Link
        href={href}
        className={finalClassName}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  const { children, ...rest } = props;
  return (
    <button className={finalClassName} {...rest}>
      {children}
    </button>
  );
}

