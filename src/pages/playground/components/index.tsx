import React from "react"

import * as Component from "@/components"
import { Title } from "@/components"

const PlaygroundComponents: React.FC = () => {
  if (window.location.hostname.includes("localhost" || "0.0.0.0")) {
    const Components = {
      ...Component,
    }

    return (
      <>
        {Object.values(Components).map((component, index) => (
          <React.Fragment key={index}>
            <Title
              variant="secondary"
              style={{
                marginTop: index === 0 ? "10rem" : "4rem",
                marginBottom: "1rem",
                textTransform: "none",
              }}
            >
              {component.name}
            </Title>
          </React.Fragment>
        ))}
      </>
    )
  } else {
    window.location.href = "/"
    return <></>
  }
}

export default PlaygroundComponents
