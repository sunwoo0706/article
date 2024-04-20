import { getAllPosts } from "@/lib/api"

import { ArticleList } from "./article-list"

export function ArticleBoard() {
  const posts = getAllPosts()

  return <ArticleList posts={posts} />
}
