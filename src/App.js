import { Title, BigImg, GlobalStyle } from "./styles";
import photo1 from "./Cheesecake.jpg";
import ItemList from "./components/ItemList";
import { ThemeProvider } from "styled-components";
// import styled from "styled-components";

const theme = {
  mainColor: "#242424",
  backgroundColor: "fuchsia",
  pink: "#ff85a2",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <title>CheeseCake Shop</title>
        <Title>Yammy CheeseCake just for you...</Title>
        <BigImg src={photo1} alt="cheesecake shop" />
      </div>
      <ItemList />
    </ThemeProvider>
  );
}

export default App;
