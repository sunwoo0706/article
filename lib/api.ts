import fs from "fs"
import { join } from "path"
import { serialize } from "next-mdx-remote/serialize"
import rehypeCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { ArticleType } from "@/types/article"

import { getShikiHighlighter } from "./shiki/getShikiHighlighter"

const articleDir = join(process.cwd(), "_articles")

export function getArticleSlugs() {
  return fs.readdirSync(articleDir).map((slug) => slug.replace(/\.mdx$/, ""))
}

const getArticleRawSourceBySlug = (slug: string) => {
  const fullPath = join(articleDir, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  return fileContents
}

export const getArticleSourceBySlug = async (slug: string) => {
  const fileContents = getArticleRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          // @ts-ignore
          rehypeCode,
          {
            theme: "github-light",
            getHighlighter: getShikiHighlighter,
            keepBackground: false,
          },
        ],
      ],
      format: "mdx",
    },
    parseFrontmatter: true,
  })

  return {
    ...serializedData,
    article: { ...serializedData.frontmatter, slug } as ArticleType,
  }
}

const getArticleFrontmatterBySlug = async (slug: string) => {
  const fileContents = getArticleRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
    parseFrontmatter: true,
  })

  return { ...serializedData.frontmatter, slug } as ArticleType
}

export const getAllArticles = () => {
  const slugs = getArticleSlugs()

  const articles = Promise.all(
    slugs.map((slug) => getArticleFrontmatterBySlug(slug))
  ).then((sources) =>
    sources.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  )

  return articles
}
