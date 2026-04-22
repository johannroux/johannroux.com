import {compileMDX} from "next-mdx-remote/rsc";
import type {MDXComponents} from "mdx/types";
import {CompanyChip} from "@/components/ui/CompanyChip";
import {InstitutionChip} from "@/components/ui/InstitutionChip";

const components: MDXComponents = {
  CompanyChip,
    InstitutionChip,
  a: (props) => (
    <a
      {...props}
      className="font-medium underline decoration-transparent underline-offset-4 transition-colors hover:decoration-[color:var(--color-accent)]"
    />
  ),
  h1: ({ children, ...props }) => (
    <h1
      {...props}
      className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl"
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mt-10 text-balance text-2xl font-semibold tracking-tight sm:text-3xl"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="mt-8 text-balance text-xl font-semibold tracking-tight"
    >
      {children}
    </h3>
  ),
  p: (props) => <p {...props} className="mt-4 leading-relaxed text-foreground/80" />,
  ul: (props) => <ul {...props} className="mt-4 list-disc pl-6 text-foreground/80" />,
  ol: (props) => <ol {...props} className="mt-4 list-decimal pl-6 text-foreground/80" />,
  li: (props) => <li {...props} className="mt-2" />,
};

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
    },
  });

  return content;
}

