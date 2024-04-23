import { getAllArticles } from "@/lib/api"

import { ArticleCardList } from "./article-card-list"

export async function ArticleBoard() {
  const articles = await getAllArticles()

  return <ArticleCardList articles={articles} />
}
