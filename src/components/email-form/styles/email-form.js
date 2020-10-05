import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 1000px) {
  flex-direction: column;
  align-items: center;
  }
`;
export const Input = styled.input`
  max-width: 450px;
  width: 90%;
  border: 0;
  outline: none;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background:#e50914;
  text-transform: uppercase;
  padding: 0 32px;
  border: 0;
  font-size: 26px;
  cursor: pointer;
  outline: none;
  color: white;
  box-sizing: border-box;
  &:hover{
    background: #f40612;
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top:20px;
    font-weight: bold;
  }
  
  
  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    
    @media (max-width: 1000px) {
    width: 16px;
    }
  }
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0; 
`
export const ErrorMsg = styled.h4`
  color: red;
  margin: 3px 0 0 0;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Wrapper = styled.div`
  height: 30px;
  width: 100%;
  display: block;
`