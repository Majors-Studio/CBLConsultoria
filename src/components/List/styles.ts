import styled from "styled-components";

export const ListContainer = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;

display: flex;
flex-direction: column; 
align-items: flex-end;

    & > li:last-child {
        border-bottom: none;
    }
`

export const ListItem = styled.li`
    width: fit-content;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: right;



`