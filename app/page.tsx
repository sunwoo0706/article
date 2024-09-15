import { getAllArticles, getSearchedAllArticles } from "@/lib/api"
import { ArticleCardList } from "@/components/article-card-list"
import { SearchBar } from "@/components/search-bar"
import { SiteConsoleMessage } from "@/components/site-console-message"

type SearchParams = {
  [key: string]: string | undefined
}

export default async function IndexPage({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  let articles

  if (!searchParams?.search || searchParams.search === "") {
    articles = await getAllArticles()
  } else {
    articles = await getSearchedAllArticles(searchParams.search)
  }

  return (
    <>
      <SiteConsoleMessage />
      <SearchBar />
      <ArticleCardList articles={articles} />
    </>
  )
}
