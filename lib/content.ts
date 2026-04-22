import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type MdxPageFrontmatter = {
  title: string;
  description?: string;
};

export type MdxPostFrontmatter = {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
};

export type MdxFile<TFrontmatter> = {
  slug: string;
  frontmatter: TFrontmatter;
  content: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readMdxFile<TFrontmatter>(
  filePath: string,
  slug: string,
): Promise<MdxFile<TFrontmatter>> {
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);
  return {
    slug,
    frontmatter: parsed.data as TFrontmatter,
    content: parsed.content,
  };
}

export async function getPage(slug: string) {
  const filePath = path.join(CONTENT_ROOT, "pages", `${slug}.mdx`);
  return await readMdxFile<MdxPageFrontmatter>(filePath, slug);
}

export async function getAllPostSlugs(): Promise<string[]> {
  const dir = path.join(CONTENT_ROOT, "posts");
  const files = await fs.readdir(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getPost(slug: string) {
  const filePath = path.join(CONTENT_ROOT, "posts", `${slug}.mdx`);
  const file = await readMdxFile<MdxPostFrontmatter>(filePath, slug);
  const date = file.frontmatter.date as unknown;
  if (date instanceof Date) {
    file.frontmatter.date = date.toISOString().slice(0, 10);
  }
  return file;
}

export async function getAllPosts() {
  const slugs = await getAllPostSlugs();
  const posts = await Promise.all(slugs.map((s) => getPost(s)));
  return posts.sort((a, b) =>
    a.frontmatter.date < b.frontmatter.date ? 1 : -1,
  );
}
