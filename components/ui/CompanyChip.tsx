import Image from "next/image";
import { cn } from "@/lib/cn";

type CompanyChipProps = {
  name: string;
  logoSrc: string;
  className?: string;
};

export function CompanyChip(
  { name, logoSrc, className }: Readonly<CompanyChipProps>,
) {
  return (
    <span
      className={cn(
        "inline-flex align-middle items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-2.5",
        "text-base font-semibold tracking-tight shadow-soft",
        className,
      )}
    >
      <Image
        src={logoSrc}
        alt=""
        aria-hidden="true"
        width={20}
        height={20}
        className="h-5 w-5 object-contain"
      />
      {name}
    </span>
  );
}

