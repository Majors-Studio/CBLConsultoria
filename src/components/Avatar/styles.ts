import { tokens } from "@/utils/tokens"
import styled from "styled-components"

interface ContainerProps {
    size: 'small' | 'medium' | 'large'
}

export const Container = styled.div<ContainerProps>`
    border-radius: ${tokens.border.radius.circular}%;
    background-color: ${tokens.colors.brand.dark};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ${props => props.size === 'small' && `
        width: ${tokens.space.sizeXl};
        height: ${tokens.space.sizeXl};
    `}
    ${props => props.size === 'medium' && `
        width: ${tokens.space.sizeXxl};
        height: ${tokens.space.sizeXxl};
    `}
    ${props => props.size === 'large' && `
        width: ${tokens.space.sizeHuge};
        height: ${tokens.space.sizeHuge};
    `}
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;

    transform: scale(1.4);
`