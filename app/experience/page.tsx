import { getPage } from "@/lib/content";
import { renderMdx } from "@/lib/mdx";
import { PhotoBanner } from "@/components/PhotoBanner";
import { sitePhotos } from "@/lib/photos";

export const dynamic = "force-static";

export default async function ExperiencePage() {
  const page = await getPage("experience");
  const content = await renderMdx(page.content);

  return (
    <main>
      <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
            Experience
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.frontmatter.title}
          </h1>
          {page.frontmatter.description ? (
            <p className="mt-5 text-lg leading-relaxed text-muted">
              {page.frontmatter.description}
            </p>
          ) : null}
        </div>

        <PhotoBanner
          photo={sitePhotos.fakarava2}
          className="mt-8 max-w-3xl"
          priority
        />

        <article className="prose mt-10 max-w-3xl">{content}</article>
      </div>
    </main>
  );
}

