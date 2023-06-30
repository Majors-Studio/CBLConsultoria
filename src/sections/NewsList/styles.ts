import { tokens } from "@/utils/tokens";
import styled from "styled-components";

export const PostsContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 45px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`