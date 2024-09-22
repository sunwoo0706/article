"use client"

import { motion } from "framer-motion"

import { formatDateTime } from "@/lib/utils"

interface ArticleHeaderProps {
  title: string
  date: string
  slug: string
}

export function ArticleHeader({ title, date, slug }: ArticleHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <motion.h1
          className="text-base font-semibold text-[#2C2C2C]"
          transition={{
            type: "spring",
            duration: 0.8,
            bounce: 0,
          }}
          layoutId={`article-title-${slug}`}
        >
          {title}
        </motion.h1>
        <motion.time
          dateTime={date}
          className="pl-px text-sm font-normal text-[#696565]"
          transition={{
            type: "spring",
            duration: 0.8,
            bounce: 0,
          }}
          layoutId={`article-date-${slug}`}
        >
          {formatDateTime(date)}
        </motion.time>
      </div>
    </div>
  )
}
