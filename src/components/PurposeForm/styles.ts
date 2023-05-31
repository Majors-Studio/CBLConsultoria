import styled from "styled-components"

export const Container = styled.div`
  width: 520px;
  height: fit-content;
  background-color: #fff;
  padding: 20px 0 40px;
  border-radius: 30px;
`

export const Title = styled.h1`
  color: #121212;
  font-size: 25px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
`

export const Subtitle = styled.h2`
  color: #000000;
  /* font-family: "Montserrat", Sans-serif; */
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1em;
  letter-spacing: 0px;
  max-width: 440px;
  text-align: center;
  margin: 0 auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 440px;
  width: 100%;
  margin: 40px auto 0;
`

export const Input = styled.input`
  background-color: #f6f4f4;
  padding: 5px 14px;
  border-radius: 15px;
`

export const TextArea = styled.textarea`
  background-color: #f6f4f4;
  padding: 5px 14px;
  border-radius: 15px;
`

export const Button = styled.button`
  background-color: #7a4726;
  border-radius: 28px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  padding: 0 24px;
  height: 40px;
`
