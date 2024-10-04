import { readFileSync } from "node:fs"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const alt = "sunwoo's article site main"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 675,
}

const getFontData = () => {
  const fontPath = join(
    process.cwd(),
    "public",
    "static",
    "fonts",
    "PretendardSemiBold.otf"
  )

  return readFileSync(fontPath)
}

export default async function Image() {
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
          이선우의 글
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
