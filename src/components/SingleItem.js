import { ItemWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const SingleItem = ({ cake }) => {
  return (
    <ItemWrapper>
      <Link to={`/List/${cake.slug}`}>
        <img src={cake.image} alt={cake.name} />
      </Link>
      <p>{cake.name}</p>
      <p className="price-color">{cake.price} KD</p>
      <UpdateButton item={cake} />
      <DeleteButton itemId={cake.id} />
    </ItemWrapper>
  );
};
export default observer(SingleItem);
