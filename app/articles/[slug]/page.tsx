import { getArticleSlugs, getArticleSourceBySlug } from "@/lib/api"
import { Markdown } from "@/components/markdown"

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
    <section>
      <h1 className="text-normal font-medium text-neutral-900">
        {article.title}
      </h1>
      <time
        dateTime={article.date}
        className="mt-2 pl-px text-[0.8125rem] font-normal text-[#696565]"
      >
        {article.date}
      </time>
      <Markdown source={source} />
    </section>
  )
}
