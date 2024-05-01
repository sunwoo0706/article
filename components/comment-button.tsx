import { Icons } from "./icons"

export function CommectButton() {
  return (
    <button className="grid size-10 place-content-center rounded-full bg-[#F3F3F3] text-[#6F6F6F] transition hover:bg-[#E4E4E4]">
      <Icons.message className="size-5" strokeWidth={1.75} />
    </button>
  )
}
