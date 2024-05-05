import { ImageResponse } from "next/og"

import { getArticleSourceBySlug } from "@/lib/api"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const slug = url.pathname.split("/")[1]
  const { article } = await getArticleSourceBySlug(slug)

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {article.title}
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
