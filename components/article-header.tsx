import { formatDateTime } from "@/lib/utils"

import { Comment } from "./comment"

interface ArticleHeaderProps {
  title: string
  date: string
}

export function ArticleHeader({ title, date }: ArticleHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-normal font-semibold text-neutral-900">{title}</h1>
        <time
          dateTime={date}
          className="pl-px text-sm font-normal text-[#696565]"
        >
          {formatDateTime(date)}
        </time>
      </div>
      <Comment />
    </div>
  )
}
