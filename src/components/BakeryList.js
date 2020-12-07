// Styles
import { Title } from "../styles";
import { observer } from "mobx-react";
import bakeryStore from "../stores/bakeryStore";
import BakeryItem from "./BakeryItem";
import { useState } from "react";
import SearchBar from "./SearchBar";

const BakeryList = () => {
  const [query, setQuery] = useState("");

  const bakeryList = bakeryStore.bakeries
    .filter((bakery) => bakery.name.toLowerCase().includes(query.toLowerCase()))
    .map((bakery) => <BakeryItem bakery={bakery} key={bakery.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="container">
        <Title>Bakeries</Title>
        <div className="row">{bakeryList}</div>
      </div>
    </>
  );
};
export default observer(BakeryList);
