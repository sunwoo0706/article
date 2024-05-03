import { getArticleSlugs, getArticleSourceBySlug } from "@/lib/api"
import { Separator } from "@/components/ui/separator"
import { ArticleHeader } from "@/components/article-header"
import { Giscus } from "@/components/giscus"
import { Markdown } from "@/components/markdown"
import { Toc } from "@/components/toc"

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

type Params = {
  params: {
    slug: string
  }
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
