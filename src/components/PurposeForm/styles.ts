import styled from "styled-components";

export const Container = styled.div`
  /* width: 520px; */
  height: fit-content;
  background-color: #fff;
  padding: 40px 20px 40px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  color: #4f665a;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
  line-height: 1;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.h2`
  color: #333;
  /* font-family: "Montserrat", Sans-serif; */
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.1em;
  letter-spacing: 0px;
  max-width: 440px;
  text-align: center;
  margin: 0 auto;
`;

export const Form = styled.form`
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
  &:focus-visible {
    outline: 1px solid #4f665a;
  }
  ::placeholder {
    color: #333;
  }
`;

export const TextArea = styled.textarea`
  background-color: #f8f8f8;
  padding: 5px 14px;
  border-radius: 15px;
  width: 100%;
  &:focus-visible {
    outline: 1px solid #4f665a;
  }
  ::placeholder {
    color: #333;
  }
`;

export const Button = styled.button`
  font-weight: 700;
  border-radius: 0.5rem;
  border: 2px solid #4f665a;
  box-shadow: inset 0 0 0 0px #4f665a;
  transition: border-radius 0.3s, box-shadow 0.3s, color 0.3s;
  transition-timing-function: cubic-bezier(0.7, 0, 0.2, 1);
  padding-inline: 1.5rem;
  height: 4.5rem;
  width: 220px;
  font-size: 1.5rem;
  color: #4f665a;
  &:hover {
    color: #e7e7e7;
    border-radius: 50%;
    box-shadow: inset 0 0 0 40px #4f665a;
    transition-delay: 0s, 0s, 0.2s;
    border: 2px solid transparent;
  }
`;
