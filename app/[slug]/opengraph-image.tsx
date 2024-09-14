import { ImageResponse } from "next/og"

export const alt = "sunwoo's article"
export const contentType = "image/png"
export const size = {
  width: 1200,
  height: 675,
}

export default async function Image({ params }: { params: { slug: string } }) {
  const pretendard = fetch(
    new URL("../public/static/fonts/PretendardVariable.woff2", import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDFDFD",
          width: "100%",
          height: "100%",
          padding: "20px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            color: "#2C2C2C",
            fontSize: "24px",
          }}
        >
          {params.slug}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Pretendard",
          data: await pretendard,
          style: "normal",
          weight: 400,
        },
      ],
    }
  )
}
