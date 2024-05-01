import { getAllArticles } from "@/lib/api"
import { ArticleCardList } from "@/components/article-card-list"
import { SiteConsoleMessage } from "@/components/site-console-message"

export default async function IndexPage() {
  const articles = await getAllArticles()

  return (
    <>
      <SiteConsoleMessage />
      <ArticleCardList articles={articles} />
    </>
  )
}
