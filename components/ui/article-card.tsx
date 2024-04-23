import { cx } from "class-variance-authority"
import { Link } from "next-view-transitions"

import { ArticleType } from "@/types/article"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  article: ArticleType
}

export function ArticleCard({ className, article, ...props }: ArticleCardProps) {
  return (
    <Link href={`/${article.slug}`}>
      <section
        className={cx(
          "flex w-full justify-between rounded p-2 px-3 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
          className
        )}
        {...props}
      >
        <p className="text-sm font-normal text-neutral-900">{article.title}</p>
        <time
          className="text-sm font-normal text-[#696565]"
          dateTime={article.date}
        >
          {article.date}
        </time>
      </section>
    </Link>
  )
}
