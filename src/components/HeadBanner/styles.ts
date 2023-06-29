import styled from "styled-components";

export const Container = styled.div`
 width: 100vw;
  position: relative;
  margin-top: 120px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`