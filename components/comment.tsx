import { CommectButton } from "./comment-button"
import { Giscus } from "./giscus"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Comment() {
  return (
    <Sheet>
      <SheetTrigger>
        <CommectButton />
      </SheetTrigger>
      <SheetContent className="pb-6 pt-[3.25rem]">
        <div className="hide-scroll h-full overflow-y-scroll">
          <Giscus />
        </div>
      </SheetContent>
    </Sheet>
  )
}
