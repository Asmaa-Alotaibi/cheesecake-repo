import items from "../item";
import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const SingleItem = (props) => {
  const cake = props.cake;

  return (
    <ItemWrapper>
      {/* <p>{props.cakeObject.id}</p> */}
      <img
        src={cake.imag}
        alt={cake.name}
        onClick={() => props.setItem(cake)}
      />
      <p>{cake.name}</p>
      <p className="price-color">{cake.price} KD</p>
      <DeleteButton itemId={cake.id} deleteitem={props.deleteitem} />
    </ItemWrapper>
  );
};
export default SingleItem;
