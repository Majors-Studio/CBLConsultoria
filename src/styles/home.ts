import styled from "styled-components"

export const Container = styled.div`
  height: fit-content;
  width: 100vw;
  background-color: #f2f2f2;

  margin-top: 120px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  margin-top: 100px;
  margin-bottom: 180px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InfoTitle = styled.h1`
  font-size: 35px;
  font-weight: 600;
  line-height: 38px;
  max-width: 520px;
  width: 100%;
  text-align: left;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const PrecatoryInfoItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const CtaButton = styled.button`
  width: 192px;
  height: 39px;
  background-color: #7a4726;
  border-radius: 50px;
  border: none;
  color: #fff;
`

export const PurposeContainer = styled.div``
