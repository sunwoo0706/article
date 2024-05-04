import { Metadata } from "next"

import { getArticleSlugs, getArticleSourceBySlug } from "@/lib/api"
import { Separator } from "@/components/ui/separator"
import { ArticleHeader } from "@/components/article-header"
import { Giscus } from "@/components/giscus"
import { Markdown } from "@/components/markdown"
import { Toc } from "@/components/toc"

type Params = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params: { slug },
}: Params): Promise<Metadata> {
  const { article } = await getArticleSourceBySlug(slug)
  const title = article.title

  const defaultMetadata = {
    title,
  }

  return {
    title: {
      absolute: title,
    },
    openGraph: defaultMetadata,
    twitter: {
      ...defaultMetadata,
      card: "summary",
      site: "@sunwoo0706",
      creator: "@sunwoo0706",
    },
  }
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export default async function Article({ params: { slug } }: Params) {
  const source = await getArticleSourceBySlug(slug)
  const article = source.article

  return (
    <div>
      <Toc />
      <ArticleHeader {...article} />
      <Markdown source={source} />
      <Separator className="mb-6 mt-8 bg-[#EDEDED]" />
      <Giscus />
    </div>
  )
}
