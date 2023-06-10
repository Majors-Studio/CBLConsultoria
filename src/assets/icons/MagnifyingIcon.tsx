import React from "react"

const MagnifyingGlass: React.FC = (props) => {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="100%" width="100%" {...props}>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M10 6.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-.691 3.516a4.5 4.5 0 11.707-.707l2.838 2.837a.5.5 0 01-.708.708L9.31 10.016z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default MagnifyingGlass
