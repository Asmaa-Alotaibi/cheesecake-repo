import SingleItem from "./SingleItem";
import items from "../item";
import { ListWrapper } from "../styles";
import SearchBar from "./SearchBar";
import { useState } from "react";

const ItemList = () => {
  const [query, setQuery] = useState("");
  const [_items, setItems] = useState(items);
  const filteredItems = _items.filter((e) =>
    e.name.toLocaleLowerCase().includes(query)
  );
  const itemList = filteredItems.map((e) => (
    <SingleItem cakeObject={e} key={e.id} />
  ));
  console.log("filteredItems", filteredItems);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemList}</ListWrapper>
    </>
  );
};

export default ItemList;
