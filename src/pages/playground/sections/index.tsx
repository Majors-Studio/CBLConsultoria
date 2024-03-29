import React from "react"

import * as Section from "@/sections"
import { Title } from "@/components"

const PlaygroundSection: React.FC = () => {
  if (window.location.hostname.includes("localhost" || "0.0.0.0")) {
    const Sections = {
      ...Section,
    }
    return (
      <>
        {Object.values(Sections).map((Item, index) => (
          <React.Fragment key={index}>
            <Title
              variant="secondary"
              style={{
                marginTop: index === 0 ? "10rem" : "4rem",
                marginBottom: "1rem",
                textTransform: "none",
              }}
            >
              {Item.name}
            </Title>
            {/* <Item /> */}
          </React.Fragment>
        ))}
      </>
    )
  } else {
    window.location.href = "/"
    return <></>
  }
}

export default PlaygroundSection
