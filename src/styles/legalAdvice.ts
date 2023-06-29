import styled from "styled-components"
import { tokens } from "@/utils/tokens"

interface IProps {
  bgColor?: string;
  textColor?: string;
}

export const ContainerFluid = styled.div<IProps>`
width: 100% ;  
margin: 0 auto;
position: relative;
background-color: ${(props) => props.bgColor};
`
export const Container = styled.div`
width: 100% ;
max-width: 1280px;  
margin: 0 auto;
position: relative;
padding: 95px 0;
display: flex;
justify-content: space-between;
`

export const BoxText = styled.div`
display: flex;
flex-direction: colums;
max-width: 500px;
flex-direction: column;
gap: 65px;
`

export const Title = styled.h1<IProps>`
  font-size: ${tokens.font.sizes.xl};
  color: ${(props) => props.textColor};
  max-width: 400px;
  line-height: ${tokens.font.sizes.xxl};
  font-weight: 600;
`
export const Text = styled.p`
font-size: ${tokens.font.sizes.sm};
color: ${tokens.colors.brand.light};
line-height: ${tokens.font.sizes.md};
`
export const BoxImage = styled.div`
  width: 500px;
  height: 386px;
`