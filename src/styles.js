import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  color: #242424;
  background-color:papayawhip;
}
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
const listWrapper = styled.div`
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
export { Title, BigImg, listWrapper, ItemWrapper, GlobalStyle };
