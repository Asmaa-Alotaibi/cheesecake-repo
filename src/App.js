import { useState } from "react";
//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
//components
import NavBar from "./components/NavBar";
import Routes from "./components/Routes";
import bakeryStore from "./stores/bakeryStore";
import { observer } from "mobx-react";
import itemStore from "./stores/itemStore";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {bakeryStore.loading || itemStore.loading ? (
        <h1>Loadinggg</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}

export default observer(App);
