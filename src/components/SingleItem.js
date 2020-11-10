//import items from "../item";
import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react";
const SingleItem = (props) => {
  const cake = props.cake;

  return (
    <ItemWrapper>
      <Link to={`/cheeseCakeList/${cake.id}`}>
        <img src={cake.imag} alt={cake.name} />
      </Link>
      <p>{cake.name}</p>
      <p className="price-color">{cake.price} KD</p>
      <DeleteButton itemId={cake.id} deleteitem={props.deleteitem} />
    </ItemWrapper>
  );
};
export default SingleItem;
