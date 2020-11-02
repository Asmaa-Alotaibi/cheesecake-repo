import SingleItem from "./SingleItem";
import items from "../item";
import { ListWrapper } from "../styles";

const ItemList = () => {
  const itemList = items.map((e) => <SingleItem cakeObject={e} />);

  return <ListWrapper>{itemList}</ListWrapper>;
};

export default ItemList;
