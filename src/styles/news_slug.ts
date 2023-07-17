import { tokens } from "@/utils/tokens"
import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;

  margin-top: 120px;
  background-color: ${tokens.colors.brand.lightCream};
  overflow-x: hidden;
`

export const Content = styled.div`
  max-width: ${tokens.breakpoints.desktopMd};
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
`

export const Tab = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Grid = styled.div`
  margin-top: 20px;

  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;

  @media (max-width: ${tokens.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Left = styled.div`
  width: 100%;
  max-width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border: 1px solid ${tokens.colors.neutral.lowLight};
`

export const Right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const BannerImage = styled.img`
  width: 100%;

  max-height: 400px;
  height: 100%;

  object-fit: cover;
  object-position: center;
`

export const NoImage = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  min-height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${tokens.colors.neutral.lowLight};
`

export const Category = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 12px 0 4px;

  color: ${tokens.colors.neutral.lowLight};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-family: ${tokens.font.family.secondary};
`

export const Title = styled.h1`
  font-size: 38px;
  color: ${tokens.colors.neutral.lowDark};
  font-weight: 400;
  line-height: 55px;
  font-family: ${tokens.font.family.primary};
`

export const Description = styled.div`
  font-size: 12px;
  color: ${tokens.colors.neutral.lowMedium};
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 12px;
  letter-spacing: 1px;
  font-family: ${tokens.font.family.secondary};

  span {
    font-family: ${tokens.font.family.secondary};
  }
`
