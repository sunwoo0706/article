import { ImageResponse } from "next/og"

import { getArticleSourceBySlug } from "@/lib/api"

type Params = {
  params: {
    slug: string
  }
}

export const alt = "opengraph image"
export const size = {
  width: 400,
  height: 200,
}

export const contentType = "image/png"

// Image generation
export default async function Image({ params: { slug } }: Params) {
  // Font
  // const pretendard = fetch(
  //   new URL("https://cdn.jsdelivr.net/gh/webfontworld/Pretendard-Medium.ttf")
  // ).then((res) => res.arrayBuffer())

  const { article } = await getArticleSourceBySlug(slug)

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage:
            "radial-gradient(circle at 20px 20px, lightgray 4%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "40px 40px",
        }}
      >
        {article.title}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
