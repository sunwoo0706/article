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

export const generateMetadata = async ({
  params: { slug },
}: Params): Promise<Metadata> => {
  const { article } = await getArticleSourceBySlug(slug)
  const title = article.title
  const description = article.summary

  const defaultMetadata = {
    title,
    description,
  }

  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: { ...defaultMetadata, type: "website" },
    twitter: {
      ...defaultMetadata,
      card: "summary_large_image",
      site: "@sunwoo0706",
      creator: "@sunwoo0706",
    },
  }
}

export const generateStaticParams = () => {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export default async function Article({ params: { slug } }: Params) {
  const source = await getArticleSourceBySlug(slug)
  const article = source.article

  return (
    <div className="flex flex-col gap-8">
      <Toc />
      <div>
        <ArticleHeader {...article} />
        <Markdown source={source} />
        <Separator className="mb-6 mt-8 bg-[#EDEDED]" />
        <Giscus />
      </div>
    </div>
  )
}
