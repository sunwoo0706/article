import { cx } from "class-variance-authority"

interface ArticleCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  dateTime: string
}

export function ArticleCard({
  className,
  title,
  dateTime,
  ...props
}: ArticleCardProps) {
  return (
    <section
      className={cx(
        "flex w-full justify-between rounded p-2 bg-transparent hover:bg-[#F7F7F7] transition-colors cursor-pointer",
        className
      )}
      {...props}
    >
      <p className="text-sm font-normal text-neutral-900">{title}</p>
      <time className="text-sm font-normal text-[#696565]" dateTime={dateTime}>
        {dateTime}
      </time>
    </section>
  )
}
