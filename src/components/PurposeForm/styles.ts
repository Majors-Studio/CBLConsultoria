import styled from "styled-components";
import { tokens } from "../../utils/tokens";

export const Container = styled.div`
  height: 100%;
  background-color: #fff;
  padding: 40px 20px 40px;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: ${tokens.colors.brand.pure};
  font-size: ${tokens.font.sizes.lg};
  font-weight: ${tokens.font.weight.bold};
  text-align: center;
  margin: 0 auto;
  line-height: 1;
  margin-bottom: 40px;
  font-family: ${tokens.font.family.primary};

  @media (max-width: 1024px) {
    font-size: ${tokens.font.sizes.lg};
  }

  @media (max-width: 768px) {
    font-size: ${tokens.font.sizes.md};
  }
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
  ::placeholder {
    font-family: ${tokens.font.family.secondary};
  }
`;

export const TextArea = styled.textarea`
  background-color: #f8f8f8;
  padding: 5px 14px;
  border-radius: 15px;
  width: 100%;
  outline: none;
  ::placeholder {
    font-family: ${tokens.font.family.secondary};
  }
`;
