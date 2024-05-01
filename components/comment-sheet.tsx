import { Giscus } from "./giscus"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"

export function CommectSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <div className="hide-scroll h-full overflow-y-scroll py-4">
          <Giscus />
        </div>
      </SheetContent>
    </Sheet>
  )
}
