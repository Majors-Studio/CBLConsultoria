import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export interface IContainerProps {
    bgColor?: string;   
    py?: string;
    px?: string;
}

export const Container = styled.div<IContainerProps>`
    background-color: ${props => props.bgColor ? props.bgColor : 'transparent'};
    padding-top: ${props => props.py ? props.py : 0};
    padding-bottom: ${props => props.py ? props.py : 0};
    padding-left: ${props => props.px ? props.px : 0};
    padding-right: ${props => props.px ? props.px : 0};
`

export const Content = styled.div`
    max-width: ${tokens.breakpoints.desktopMd};
    margin: 0 auto;
`