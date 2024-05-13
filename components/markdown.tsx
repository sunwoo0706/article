"use client"

import "../styles/markdown.css"
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
          h1: ({ children }) => (
            <h2
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h4>
          ),
          h5: ({ children }) => (
            <h4
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h4>
          ),
          h6: ({ children }) => (
            <h4
              id={children?.toString()}
              className="mt-6 text-base font-semibold text-[#2C2C2C]"
            >
              {children}
            </h4>
          ),

          // paragraph
          p: ({ children }) => (
            <p
              id={children?.toString()}
              className="text-base font-[450] leading-7 text-[#484848]"
            >
              {children}
            </p>
          ),

          // Link
          a: ({ children, href }) => (
            <a
              target="_blank"
              href={href}
              className="inline text-base font-[450] leading-7 text-[#484848] underline decoration-1 underline-offset-[3px]"
            >
              {children}
            </a>
          ),

          // Image
          img: ({ src, alt }) => (
            <div className="my-3 w-full overflow-hidden rounded-md border border-[#EDEDED] bg-white">
              <Image
                src={src ?? ""}
                alt={alt ?? ""}
                width={800}
                height={400}
                className="w-full"
              />
            </div>
          ),

          // List style
          ul: ({ children }) => (
            <ul className="list-inside list-disc text-base font-[450] leading-7 text-[#484848]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-inside list-decimal text-base font-[450] leading-7 text-[#484848]">
              {children}
            </ol>
          ),

          // text style
          strong: ({ children }) => (
            <strong className="font-semibold">{children}</strong>
          ),
        }}
      />
    </article>
  )
}
