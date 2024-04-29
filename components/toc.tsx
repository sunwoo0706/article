import { Link } from "next-view-transitions"

import { Icons } from "./icons"

export function Toc() {
  return (
    <div className="fixed top-0.5 -translate-x-44 translate-y-32">
      <Link
        href="/"
        className="flex items-center gap-2.5 text-sm font-normal text-[#696565]"
      >
        <Icons.cornerLeft className="size-4" />홈
      </Link>
    </div>
  )
}
