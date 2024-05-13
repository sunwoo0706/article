import { formatDateTime } from "@/lib/utils"

interface ArticleHeaderProps {
  title: string
  date: string
}

export function ArticleHeader({ title, date }: ArticleHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-base font-semibold text-[#2C2C2C]">{title}</h1>
        <time
          dateTime={date}
          className="pl-px text-sm font-normal text-[#696565]"
        >
          {formatDateTime(date)}
        </time>
      </div>
    </div>
  )
}
