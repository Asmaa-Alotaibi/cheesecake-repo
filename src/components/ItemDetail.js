import React from "react";
import items from "../item";
import { GoBackButton, DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ItemDetail = (props) => {
  const cakeObject = props.cakeObject;

  const handleDelete = (itemId) => {
    props.deleteitem(itemId);
    props.setItem();
  };

  return (
    <>
      <GoBackButton onClick={() => props.setItem(null)}>
        Cheescake List
      </GoBackButton>
      <DetailWrapper>
        <h1> {cakeObject.name}</h1>
        <img src={cakeObject.imag} alt={cakeObject.name} />
        <p> {cakeObject.description}</p>
        <p>{cakeObject.price} KD</p>
        <DeleteButton itemId={cakeObject.id} deleteitem={handleDelete} />
      </DetailWrapper>
    </>
  );
};

export default ItemDetail;
