'use client'

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { cx } from "class-variance-authority"
import { motion, useAnimate } from "framer-motion"
import { Link } from "next-view-transitions"

import { Article } from "@/types/article"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  article: Article
  index: number
}

export const ArticleCard = ({
  className,
  article,
  index,
  ...props
}: ArticleCardProps) => {
  const [scope, animate] = useAnimate()
  const searchParams = useSearchParams()

  useEffect(() => {
    animate(
      scope.current,
      { opacity: 1, y: 0 },
      { duration: 1.8, delay: index * 0.1 }
    )

    animate(scope.current, { opacity: 0, y: 60 }, { duration: 0 })
  }, [animate, index, scope, searchParams])

  return (
    <motion.div
      ref={scope}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        duration: 1.8,
        bounce: 0,
        delay: index * 0.1,
      }}
    >
      <Link
        href={`/${article.slug}`}
        className="inline-block w-full rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <section
          className={cx(
            "flex w-full h-10 justify-start items-center rounded p-2 px-3 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
            className
          )}
          {...props}
        >
          <time
            className="w-24 shrink-0 text-sm font-normal text-[#AEAEB2]"
            dateTime={article.date}
          >
            {article.date}
          </time>
          <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-[#484848]">
            <span
              style={{ viewTransitionName: `article-title-${article.slug}` }}
            >
              {article.title}
            </span>
            {article.summary !== "" ? (
              <span className="hidden text-sm font-medium text-[#AEAEB2] md:inline-block">
                {article.summary}
              </span>
            ) : null}
          </p>
        </section>
      </Link>
    </motion.div>
  )
}
