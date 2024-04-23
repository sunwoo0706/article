import { cx } from "class-variance-authority"
import { Link } from "next-view-transitions"

import { ArticleType } from "@/types/article"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  post: ArticleType
}

export function ArticleCard({ className, post, ...props }: ArticleCardProps) {
  return (
    <Link href={`/${post.slug}`}>
      <section
        className={cx(
          "flex w-full justify-between rounded p-2 px-3 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
          className
        )}
        {...props}
      >
        <p className="text-sm font-normal text-neutral-900">{post.title}</p>
        <time
          className="text-sm font-normal text-[#696565]"
          dateTime={post.date}
        >
          {post.date}
        </time>
      </section>
    </Link>
  )
}
