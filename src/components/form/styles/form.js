import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75) ;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin: auto auto 100px;
`;
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;
export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;
export const Title = styled.h1`

`;
export const Text = styled.p`

`;
export const TextSmall = styled.p`

`;
export const Link = styled(ReactRouterLink)`
  color: white;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;
export const Input = styled.input`

`;
export const Submit = styled.button`

`;

