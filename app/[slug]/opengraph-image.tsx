import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { getArticleSourceBySlug } from "@/lib/api"

type Params = {
  params: {
    slug: string
  }
}

export const size = {
  width: 1200,
  height: 675,
}

export async function generateImageMetadata({ params: { slug } }: Params) {
  const { article } = await getArticleSourceBySlug(slug)

  return [
    {
      id: article.title,
      alt: `${article.title} opengraph image`,
      contentType: "image/png",
    },
  ]
}

function getFontData() {
  const fontPath = join(
    process.cwd(),
    "public",
    "static",
    "fonts",
    "PretendardSemiBold.otf"
  )

  return readFileSync(fontPath)
}

export default async function Image({ params: { slug } }: Params) {
  const { article } = await getArticleSourceBySlug(slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDFDFD",
          width: "100%",
          height: "100%",
          padding: "78px 104px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            color: "#2C2C2C",
            fontSize: "84px",
            lineHeight: "108px",
            wordBreak: "keep-all",
            whiteSpace: "pre-line",
          }}
        >
          {article.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: getFontData(),
          style: "normal",
          weight: 600,
        },
      ],
    }
  )
}
