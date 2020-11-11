import { useState } from "react";
import items from "./item";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import Home from "./components/Home.js";
//styles
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
//components
import ItemList from "./components/ItemList.js";
import ItemDetail from "./components/ItemDetail.js";

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
  const [_items, setItems] = useState(items);

  const deleteitem = (itemId) => {
    const updateitems = _items.filter((e) => e.id !== itemId);
    setItems(updateitems);
  };

  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <Link to="/list" style={{ margin: 10, float: "right" }}>
        cheeseCakes
      </Link>
      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>

      <Switch>
        <Route path="/list/:cheeseCakeeId">
          <ItemDetail items={_items} deleteitem={deleteitem} />
        </Route>
        <Route path="/list">
          <ItemList items={_items} deleteitem={deleteitem} />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
