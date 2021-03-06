import React from 'react'

const GyroscooterSvg: React.FC = () => (
  <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x={0.56}
      y={9.202}
      width={4.801}
      height={13.603}
      rx={2.4}
      fill="#0E1821"
      stroke="#0E1821"
      strokeWidth={0.48}
    />
    <mask id="a" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.601 16.643h-1.76a1.6 1.6 0 0 1-1.6-1.6V9.06a2.642 2.642 0 0 1 3.36 2.541v5.041Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.601 16.643h-1.76a1.6 1.6 0 0 1-1.6-1.6V9.06a2.642 2.642 0 0 1 3.36 2.541v5.041Z"
      fill="#fff"
    />
    <path
      d="M5.601 16.643v.48h.48v-.48h-.48Zm-3.36-7.582L2.11 8.6l-.35.099v.363h.48Zm3.36 7.102h-1.76v.96h1.76v-.96Zm-1.76 0a1.12 1.12 0 0 1-1.12-1.12h-.96a2.08 2.08 0 0 0 2.08 2.08v-.96Zm-1.12-1.12V9.06h-.96v5.982h.96Zm-.35-5.52c.187-.053.385-.081.59-.081v-.96c-.294 0-.58.04-.851.117l.261.924Zm.59-.081a2.16 2.16 0 0 1 2.16 2.16h.96a3.12 3.12 0 0 0-3.12-3.12v.96Zm2.16 2.16v5.041h.96v-5.04h-.96Z"
      fill="#0E1821"
      mask="url(#a)"
    />
    <rect
      x={26.485}
      y={9.202}
      width={4.801}
      height={13.603}
      rx={2.4}
      fill="#0E1821"
      stroke="#0E1821"
      strokeWidth={0.48}
    />
    <path
      d="M5.361 13.682h9.682a.88.88 0 0 1 .88.88v2.721c0 .84-.68 1.52-1.52 1.52H5.361v-5.12Z"
      fill="#4878A6"
      stroke="#0E1821"
      strokeWidth={0.48}
    />
    <mask id="b" fill="#fff">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.245 16.643h1.76a1.6 1.6 0 0 0 1.6-1.6V9.06a2.642 2.642 0 0 0-3.36 2.541v5.041Z"
      />
    </mask>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.245 16.643h1.76a1.6 1.6 0 0 0 1.6-1.6V9.06a2.642 2.642 0 0 0-3.36 2.541v5.041Z"
      fill="#fff"
    />
    <path
      d="M26.245 16.643v.48h-.48v-.48h.48Zm3.36-7.582.131-.462.35.099v.363h-.48Zm-3.36 7.102h1.76v.96h-1.76v-.96Zm1.76 0a1.12 1.12 0 0 0 1.12-1.12h.961a2.08 2.08 0 0 1-2.08 2.08v-.96Zm1.12-1.12V9.06h.961v5.982h-.96Zm.35-5.52a2.162 2.162 0 0 0-.59-.081v-.96c.295 0 .58.04.851.117l-.26.924Zm-.59-.081a2.16 2.16 0 0 0-2.16 2.16h-.96a3.12 3.12 0 0 1 3.12-3.12v.96Zm-2.16 2.16v5.041h-.96v-5.041h.96Z"
      fill="#0E1821"
      mask="url(#b)"
    />
    <path
      d="M26.485 13.682h-9.682a.88.88 0 0 0-.88.88v2.721c0 .84.68 1.52 1.52 1.52h9.042v-5.12Z"
      fill="#4878A6"
      stroke="#0E1821"
      strokeWidth={0.48}
    />
    <path stroke="#0E1821" strokeWidth={0.48} d="M5.601 16.403h20.644" />
    <rect
      x={12.322}
      y={17.123}
      width={0.96}
      height={3.521}
      rx={0.48}
      transform="rotate(90 12.322 17.123)"
      fill="#fff"
    />
    <rect
      x={23.044}
      y={17.123}
      width={0.96}
      height={3.521}
      rx={0.48}
      transform="rotate(90 23.044 17.123)"
      fill="#fff"
    />
    <path
      stroke="#0E1821"
      strokeWidth={0.48}
      strokeLinecap="round"
      d="M6.961 14.963h7.202M17.684 14.963h7.201"
    />
  </svg>
)

export default GyroscooterSvg
