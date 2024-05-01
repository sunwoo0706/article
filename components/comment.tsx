import { Giscus } from "./giscus"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function Comment() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      </SheetTrigger>
      <SheetContent>
        <div className="hide-scroll h-full overflow-y-scroll py-4">
          <Giscus />
        </div>
      </SheetContent>
    </Sheet>
  )
}
