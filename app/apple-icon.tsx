import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #c2410c 0%, #9a3412 100%)',
          borderRadius: '20%',
        }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 48 48"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M44 24h-4.96a4 4 0 0 0-3.86 2.92l-4.7 16.72a.5.5 0 0 1-.96 0L18.48 4.36a.5.5 0 0 0-.96 0l-4.7 16.72A4 4 0 0 1 8.96 24H4" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
