import React from "react"

interface Props {
  id: string
}

const Anchor: React.FC<Props> = ({ id }) => {
  return (
    <div
      id={id}
      style={{
        position: "absolute",
        top: "-0",
      }}
    />
  )
}

export default Anchor
