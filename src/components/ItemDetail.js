import React from "react";
//import items from "../item";
import { GoBackButton, DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { useParams } from "react-router-dom";

const ItemDetail = (props) => {
  //const cakeObject = props.cakeObject;
  const cheeseCakeeId = useParams().cheeseCakeeId;
  const cakeObject = props.items.find((cake) => cake.id === +cheeseCakeeId);

  const handleDelete = (itemId) => {
    props.deleteitem(itemId);
  };

  return (
    <>
      <GoBackButton>Cheescake List</GoBackButton>
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
