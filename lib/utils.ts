import { clsx, type ClassValue } from "clsx"
import { format, parse } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateTime(dateTime: string) {
  const parsedDate = parse(dateTime, "yyyy-MM-dd", new Date())

  return format(parsedDate, "yyyy년 M월 d일")
}
