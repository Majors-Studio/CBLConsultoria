import React from "react"

import * as Section from "@/sections"
import { Title } from "@/components"

const PlaygroundSection: React.FC = () => {
  
    if (typeof window !== "undefined" && window.location.hostname.includes('localhost' || '0.0.0.0')) {
    window.location.href = "/"
  }
  
  
  const Sections = {
    ...Section,
  }
  return (
    <>
      {Object.values(Sections).map((Section, index) => (
        <React.Fragment key={index}>
          <Title
            variant="secondary"
            style={{
              marginTop: index === 0 ? "10rem" : "4rem",
              marginBottom: "1rem",
              textTransform: "none",
              
            }}
          >
            {Section.name}
          </Title>
          <Section />
        </React.Fragment>
      ))}
    </>
  )
}

export default PlaygroundSection
