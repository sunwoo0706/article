"use client"

import { default as GiscusCore } from "@giscus/react"

export function Giscus() {
  return (
    <GiscusCore
      id="comments"
      repo="sunwoo0706/blog"
      repoId="R_kgDOLu8X9g"
      category="comments"
      categoryId="DIC_kwDOLu8X9s4CfCmg"
      mapping="pathname"
      strict="0"
      reactionsEnabled="0"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="ko"
    />
  )
}
