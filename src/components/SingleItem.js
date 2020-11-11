//import items from "../item";
import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const SingleItem = ({ cake, deleteitem }) => {
  return (
    <ItemWrapper>
      <Link to={`/List/${cake.slug}`}>
        <img src={cake.imag} alt={cake.name} />
      </Link>
      <p>{cake.name}</p>
      <p className="price-color">{cake.price} KD</p>
      <DeleteButton itemId={cake.id} deleteitem={deleteitem} />
    </ItemWrapper>
  );
};
export default SingleItem;
