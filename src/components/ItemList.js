//import items from "../item";
import { useState } from "react";
//styles
import { ListWrapper } from "../styles";
//components
import SingleItem from "./SingleItem";
import SearchBar from "./SearchBar";
import AddButton from "../components/buttons/AddButton";
import itemStore from "../stores/itemStore";
import { observer } from "mobx-react";

const ItemList = () => {
  const [query, setQuery] = useState(""); // to save whats written in the input box

  const itemList = itemStore.items //retrive only the one that match the query
    .filter((e) => e.name.toLocaleLowerCase().includes(query))
    .map((e) => <SingleItem cake={e} key={e.id} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{itemList}</ListWrapper>
    </>
  );
};

export default observer(ItemList);
