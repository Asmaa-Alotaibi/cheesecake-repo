import { ItemWrapper } from "../styles";

const SingleItem = (props) => {
  console.log(props);
  return (
    <ItemWrapper>
      {/* <p>{props.cakeObject.id}</p> */}
      <img src={props.cakeObject.imag} alt={props.cakeObject.name} />
      <p>{props.cakeObject.name}</p>
      <p className="price-color">{props.cakeObject.price} KD</p>
    </ItemWrapper>
  );
};
export default SingleItem;
