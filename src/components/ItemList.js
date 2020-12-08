//import items from "../item";
import { useState } from "react";
//styles
import { ListWrapper } from "../styles";
//components
import SingleItem from "./SingleItem";
import SearchBar from "./SearchBar";
import AddButton from "../components/buttons/AddButton";
import { observer } from "mobx-react";

const ItemList = ({ items, bakery }) => {
  const [query, setQuery] = useState(""); // to save whats written in the input box
  //retrive only the one that match the query
  const itemList = items
    .filter((e) => e.name.toLocaleLowerCase().includes(query))
    .map((e) => <SingleItem cake={e} key={e.id} bakery={bakery} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{itemList}</ListWrapper>
    </>
  );
};

export default observer(ItemList);
