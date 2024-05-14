import { cx } from "class-variance-authority"
import { Link } from "next-view-transitions"

import { ArticleType } from "@/types/article"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  article: ArticleType
}

export function ArticleCard({
  className,
  article,
  ...props
}: ArticleCardProps) {
  return (
    <Link href={`/${article.slug}`}>
      <section
        className={cx(
          "flex w-full justify-start items-center rounded p-2 px-3 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
          className
        )}
        {...props}
      >
        <time
          className="w-24 text-sm font-normal text-[#AEAEB2]"
          dateTime={article.date}
        >
          {article.date}
        </time>
        <p className="flex items-center gap-2 text-[0.9375rem] font-medium text-[#484848]">
          {article.title}
          {article.summary !== "" ? (
            <span className="hidden text-sm font-medium text-[#AEAEB2] md:inline-block">
              {article.summary}
            </span>
          ) : null}
        </p>
      </section>
    </Link>
  )
}
