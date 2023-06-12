import styled from "styled-components"

interface ContainerProps {
    size: 'small' | 'medium' | 'large'
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.size === 'small' && `
        width: 40px;
        height: 40px;
    `}
    ${props => props.size === 'medium' && `
        width: 60px;
        height: 60px;
    `}
    ${props => props.size === 'large' && `
        width: 80px;
        height: 80px;
    `}
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;


`