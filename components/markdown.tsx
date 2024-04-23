"use client"

import Image from "next/image"
import { MDXRemote } from "next-mdx-remote"

import { getArticleSourceBySlug } from "@/lib/api"

type Props = {
  source: Awaited<ReturnType<typeof getArticleSourceBySlug>>
}

export const Markdown = ({ source }: Props) => {
  return (
    <article
      id="markdown"
      className="flex w-full flex-col gap-y-3 pb-20 leading-loose"
    >
      <MDXRemote
        {...source}
        components={{
          h1: ({ children }) => (
            <h1
              id={children?.toString()}
              className="pt-10 text-3xl font-semibold"
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2
              id={children?.toString()}
              className="pt-10 text-3xl font-semibold"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={children?.toString()}
              className="pt-6 text-xl font-semibold"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 id={children?.toString()} className="pt-2 text-lg">
              {children}
            </h4>
          ),

          // Lists
          ul: ({ children }) => (
            <ul className="flex list-inside list-disc flex-col gap-y-3">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-inside list-decimal">{children}</ol>
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
            <span className="flex w-full justify-center py-6">
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width={800}
                height={400}
                className="w-full rounded-lg shadow-md md:w-[70%]"
              />
            </span>
          ),

          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-black pl-4">
              {children}
            </blockquote>
          ),
        }}
      />
    </article>
  )
}
