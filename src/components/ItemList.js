//import items from "../item";
import { useState } from "react";
//styles
import { ListWrapper } from "../styles";
//components
import SingleItem from "./SingleItem";
import SearchBar from "./SearchBar";

const ItemList = (props) => {
  const [query, setQuery] = useState(""); // to save whats written in the input box

  const itemList = props.items //retrive only the one that match the query
    .filter((e) => e.name.toLocaleLowerCase().includes(query))
    .map((e) => (
      <SingleItem
        cake={e}
        deleteitem={props.deleteitem}
        setItem={props.setItem}
        key={e.id}
      />
    ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{itemList}</ListWrapper>
    </>
  );
};

export default ItemList;
