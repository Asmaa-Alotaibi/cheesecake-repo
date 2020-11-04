import { GlobalStyle, ThemeButton, Title, BigImg } from "./styles";
import photo1 from "./Cheesecake.jpg";
import ItemList from "./components/ItemList";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
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
