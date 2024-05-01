import { getArticleSlugs, getArticleSourceBySlug } from "@/lib/api"
import { formatDateTime } from "@/lib/utils"
import { CommectSheet } from "@/components/comment-sheet"
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
      <h1 className="text-normal font-semibold text-neutral-900">
        {article.title}
      </h1>
      <time
        dateTime={article.date}
        className="mt-0.5 pl-px text-sm font-normal text-[#696565]"
      >
        {formatDateTime(article.date)}
      </time>
      <Markdown source={source} />
      <CommectSheet />
    </div>
  )
}
