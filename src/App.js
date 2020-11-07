import { useState } from "react";
import photo1 from "./Cheesecake.jpg";
import items from "./item";

//styles
import { GlobalStyle, ThemeButton, Title, BigImg } from "./styles";
import { ThemeProvider } from "styled-components";
//components
import ItemList from "./components/ItemList";
import ItemDetail from "./components/ItemDetail";

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

  const [item, setItem] = useState(null);

  const setView = () => {
    if (item)
      return (
        <ItemDetail
          cakeObject={item}
          setItem={setItem}
          deleteitem={deleteitem}
        />
      );
    else
      return (
        <ItemList items={_items} setItem={setItem} deleteitem={deleteitem} />
      );
  };
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
      {setView()}
    </ThemeProvider>
  );
}

export default App;
