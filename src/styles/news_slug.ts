import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 0;


`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

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

  height: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 20px;
`

export const Left = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: red;
`

export const Right = styled.div``

export const Image = styled.img`
  width: 100%;

  max-height: 400px;
  height: 100%;

  object-fit: cover;
  object-position: center;
`

export const Category = styled.div``

export const Title = styled.div``

export const Description = styled.div``

export const Text = styled.div``
