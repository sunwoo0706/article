import { notFound } from "next/navigation"

import { getPostBySlug, getPostSlugs } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

type Params = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content || "")

  return (
    <section>
      <p>{post.title}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </section>
  )
}
