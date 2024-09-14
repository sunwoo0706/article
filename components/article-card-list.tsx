import { ArticleType } from "@/types/article"

import { ArticleCard } from "./ui/article-card"

export interface IArticleProps {
  articles: ArticleType[]
}

export function ArticleCardList({ articles }: IArticleProps) {
  return (
    <div className="flex flex-col gap-1">
      {articles.map((article, i) => (
        <ArticleCard article={article} index={i} key={article.title} />
      ))}
    </div>
  )
}
