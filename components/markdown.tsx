"use client"

import Image from "next/image"
import { MDXRemote } from "next-mdx-remote"

import { getArticleSourceBySlug } from "@/lib/api"

type Props = {
  source: Awaited<ReturnType<typeof getArticleSourceBySlug>>
}

export const Markdown = ({ source }: Props) => {
  return (
    <article className="mt-8 flex w-full flex-col gap-y-2">
      <MDXRemote
        {...source}
        components={{
          // heading
          h2: ({ children }) => (
            <h2
              id={children?.toString()}
              className="mt-6 text-base font-medium"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={children?.toString()}
              className="mt-6 text-base font-medium"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              id={children?.toString()}
              className="mt-6 text-base font-medium"
            >
              {children}
            </h4>
          ),

          // paragraph
          p: ({ children }) => (
            <p
              id={children?.toString()}
              className="font-regular text-[0.9375rem] leading-7 text-neutral-900"
            >
              {children}
            </p>
          ),

          // Link
          a: ({ children, href }) => (
            <a
              target="_blank"
              href={href}
              className="inline text-blue-500 hover:text-blue-600 hover:underline"
            >
              {children}
            </a>
          ),

          // Image
          img: ({ src, alt }) => (
            <div className="my-3 w-full overflow-hidden rounded-md border border-[##EDEDED] bg-white shadow-sm">
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          ),
        }}
      />
    </article>
  )
}
