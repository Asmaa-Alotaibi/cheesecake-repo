import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  color: ${(props) => props.theme.mainColor};
  background-color:${(props) => props.theme.backgroundColor};
}
`;
const GoBackButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  img {
    width: 30%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;
const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
const ThemeButton = styled.button`
  font-size: 1em;

  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  text-align: center;
  color: #cc0000;
`;
const BigImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 450px;
  height: 450px;
`;
const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;
const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
  p {
    text-align: center;
    &.price-color {
      color: ${(props) => props.theme.pink};
    }
  }
`;
const Logo = styled(Link)`
  padding: 0.75em;
  img {
    width: 10rem;
  }
`;
const NavItem = styled(NavLink)`
  padding: 0.25em 1em;
  font-size: 1em;
  color: ${(props) => props.theme.mainColor};
  &.active {
    color: ${(props) => props.theme.pink};
  }
`;
const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
const UpdateButtonStyled = styled.p`
  color: ${(props) => props.theme.pink};
`;
export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;

export {
  UpdateButtonStyled,
  CreateButtonStyled,
  NavItem,
  Logo,
  GlobalStyle,
  GoBackButton,
  DeleteButtonStyled,
  DetailWrapper,
  SearchBarStyled,
  ThemeButton,
  Title,
  BigImg,
  ListWrapper,
  ItemWrapper,
};
