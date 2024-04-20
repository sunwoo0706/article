import { ArticleCard } from "./ui/article-card"

export function ArticleBoard() {
  return (
    <ul className="flex flex-col gap-1">
      <ArticleCard title="그 남자가 살아가는 방법" dateTime={"2024-07-06"} />
      <ArticleCard title="그 남자가 살아가는 방법" dateTime={"2024-07-06"} />
      <ArticleCard title="그 남자가 살아가는 방법" dateTime={"2024-07-06"} />
      <ArticleCard title="그 남자가 살아가는 방법" dateTime={"2024-07-06"} />
    </ul>
  )
}
