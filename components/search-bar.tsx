"use client"

import { useEffect, useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSearch = () => {
    if (search === "") {
      router.push("/")

      return
    }

    const current = new URLSearchParams(Array.from(searchParams.entries()))

    current.set("search", search)

    const query = current.toString() ? `?${current.toString()}` : ""

    router.push(`${pathname}${query}`)
  }

  useEffect(() => {
    const current = new URLSearchParams(Array.from(searchParams.entries()))

    setSearch(current.get("search") ?? "")
  }, [searchParams])

  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        duration: 2,
        bounce: 0,
      }}
      className="flex gap-2"
    >
      <Input
        type="string"
        placeholder="제목 또는 요약을 검색하세요"
        value={search}
        onChange={handleChange}
      />
      <Button className="flex gap-1 font-semibold" onClick={handleSearch}>
        <Icons.search className="size-3.5" />
        검색
      </Button>
    </motion.div>
  )
}
