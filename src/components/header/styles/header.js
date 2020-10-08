import styled from "styled-components/macro";
import {Link as ReactRouterLink} from "react-router-dom"

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({src}) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')})
  top left / cover no-repeat;
  
  @media(max-width: 1100px) {
    ${({dontShowOnSmallVP}) => dontShowOnSmallVP && "background: none;"}
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;
  height: 64px;
  padding: 18px 0;
  a {
  display: flex;
  }
  @media(max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const Logo = styled.img`
  height: 32px;
  width: 108px;
  margin-right: 40px;
  
  @media(min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background: #e50914;
    width: 84px;
    height: fit-content ;
    border: 0;
    font-size: 15px;
    color: white;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    &:hover {
      background-color: #f40612;
    }
`;
export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  
  @media(max-width: 1100px) {
    display: none;
  }
`;
export const Text = styled.p`
user-select: none;
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;
export const FeatureText = styled.h2`
  color: white;
  user-select: none;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0 0 20px 0;
`;
export const Link = styled.p`
  color: white;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({active}) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  
  &:hover {
    font-weight: bold;
  }
  &:last-of-type{
    margin-right: 0;
  }
`;
export const Picture = styled.button`
  background: url(${({src}) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
  outline: none;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Dropdown = styled.div`
  display: none;
  user-select: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;
  ${Wrapper}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Wrapper} {
    margin-bottom: 10px;
    
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link},${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Search = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    color: white;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: none;
  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;
export const SearchInput = styled.input`
  background-color: #44444459;
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  margin-left: ${({active}) => (active === true ? "10px" : "0")};
  padding: ${({active}) => (active === true ? "0 10px" : "0")};
  opacity: ${({active}) => (active === true ? "1" : "0")};
  width: ${({active}) => (active === true ? '200px' : "0px")};
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

