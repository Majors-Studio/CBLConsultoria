import styled from "styled-components"
import { tokens } from "@/utils/tokens"

export const ContainerFluid = styled.div`
width: 100% ;  
margin: 0 auto;
position: relative;
background-color: ${tokens.colors.brand.pure};
`
export const Container = styled.div`
width: 100% ;
max-width: 1280px;  
margin: 0 auto;
position: relative;
padding: 95px 0;
`

export const BoxText = styled.div`
display: flex;
flex-direction: colums;
max-width: 500px;
flex-direction: column;
gap: 65px;
`

export const Title = styled.h1`
  font-size: ${tokens.font.sizes.xxl};
  color: ${tokens.colors.brand.light};
  max-width: 500px;
  line-height: ${tokens.font.sizes.xxl};
`
export const Text = styled.p`
font-size: ${tokens.font.sizes.sm};
color: ${tokens.colors.brand.light};
line-height: ${tokens.font.sizes.sm};
  
`
