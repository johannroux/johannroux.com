import Link from "next/link";
import {cn} from "@/lib/cn";

export function NavLink({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm font-medium text-foreground/80",
        "transition-colors hover:bg-surface hover:text-foreground",
      )}
    >
      {children}
    </Link>
  );
}
