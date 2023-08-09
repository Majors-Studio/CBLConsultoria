import styled from "styled-components";
import { tokens } from "../../utils/tokens";

export const Container = styled.div`
position: relative;
  height: 100%;
  background-color: #fff;
  padding: 40px 20px 40px;
  width: 100%;
max-width: 640px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
margin: 0 auto;
`;

interface iForm {
  ref: any;
}

export const Form = styled.form<iForm>`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 440px;
  width: 100%;
  margin: 40px auto 0;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #f8f8f8;
  padding: 5px 14px;
  border-radius: 15px;
  height: 50px;
  color: #333;
  width: 100%;
  outline: none;
`;

export const Select = styled.select`
/* appearance: none; */
  background-color: #f8f8f8;
  padding: 5px 14px;
  border-radius: 15px;
  height: 50px;
  width: 100%;
  outline: none;

  font-family: ${tokens.font.family.primary};
  color: ${tokens.colors.neutral.lowLight};


  option {
    font-family: ${tokens.font.family.primary};
  } 
`

export const TextArea = styled.textarea`
  background-color: #f8f8f8;
  padding: 5px 14px;
  border-radius: 15px;
  width: 100%;
  outline: none;
`;
