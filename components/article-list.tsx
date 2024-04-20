import { Post } from "@/types/post"

import { ArticleCard } from "./ui/article-card"

export interface IArticleProps {
  posts: Post[]
}

export function ArticleList({ posts }: IArticleProps) {
  return (
    <ul className="flex flex-col gap-1">
      {posts.map((post) => (
        <ArticleCard post={post} />
      ))}
    </ul>
  )
}
