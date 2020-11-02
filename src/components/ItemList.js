import SingleItem from "./SingleItem";
import items from "../item";
import styles from "../styles";

const ItemList = () => {
  const itemList = items.map((e) => <SingleItem cakeObject={e} />);

  return <div style={styles.list}>{itemList}</div>;
};

export default ItemList;
