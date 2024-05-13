"use client"

import { motion } from "framer-motion"

import { ArticleType } from "@/types/article"

import { ArticleCard } from "./ui/article-card"

export interface IArticleProps {
  articles: ArticleType[]
}

export function ArticleCardList({ articles }: IArticleProps) {
  return (
    <div className="flex flex-col gap-1">
      {articles.map((article, i) => (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 0.8 + i * 0.2,
            bounce: 0,
          }}
        >
          <ArticleCard article={article} />
        </motion.div>
      ))}
    </div>
  )
}
