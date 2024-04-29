import { Link } from "next-view-transitions"

import { Icons } from "./icons"

export function Toc() {
  return (
    <div className="fixed top-0 -translate-x-44 translate-y-32">
      <Link href="/" className="flex items-center gap-3 text-[#696565]">
        <Icons.cornerLeft className="size-4" />
        <span className="pt-px text-[0.9375rem] font-medium">홈</span>
      </Link>
    </div>
  )
}
