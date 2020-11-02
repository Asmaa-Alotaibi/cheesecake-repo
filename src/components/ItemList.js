import SingleItem from "./SingleItem";
import items from "../item";
import { listWrapper } from "../styles";

const ItemList = () => {
  const itemList = items.map((e) => <SingleItem cakeObject={e} />);

  return <listWrapper>{itemList}</listWrapper>;
};

export default ItemList;
