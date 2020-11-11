import { useState } from "react";
import items from "./item";
import { Route, Switch } from "react-router";

import Home from "./components/Home.js";

//styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
//components
import ItemList from "./components/ItemList.js";
import ItemDetail from "./components/ItemDetail.js";
import NavBar from "./components/NavBar";

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
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/list/:cheeseCakeeSlug">
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
