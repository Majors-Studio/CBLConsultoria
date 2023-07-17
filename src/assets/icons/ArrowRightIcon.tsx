import React from "react"

interface ArrowRightProps {
  style?: React.CSSProperties
}

const ArrowRight: React.FC<ArrowRightProps> = ({style},props) => {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="100%"
      width="100%"
    style={style}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
      />
    </svg>
  )
}

export default ArrowRight
