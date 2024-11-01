import fs from "fs"
import { join } from "path"
import { serialize } from "next-mdx-remote/serialize"
import rehypeCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

import { Article } from "@/types/article"

import { getShikiHighlighter } from "./shiki/getShikiHighlighter"
import { disassemble } from "es-hangul"

const articleDir = join(process.cwd(), "_articles")

export const getArticleSlugs = () => {
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
    article: { ...serializedData.frontmatter, slug } as Article,
  }
}

const getArticleFrontmatterBySlug = async (slug: string) => {
  const fileContents = getArticleRawSourceBySlug(slug)

  const serializedData = await serialize(fileContents, {
    parseFrontmatter: true,
  })

  return { ...serializedData.frontmatter, slug } as Article
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

export const getSearchedAllArticles = async (keywords: string) => {
  const allArticles = await getAllArticles()

  return allArticles.filter((article) =>
    keywords
      .split(" ")
      .some((keyword) =>
        hangulIncludes(article.title + article.summary, keyword)
      )
  )
}

const hangulIncludes = (x: string, y: string) => {
  const disassembledX = disassemble(x);
  const disassembledY = disassemble(y);

  return disassembledX.includes(disassembledY);
}
