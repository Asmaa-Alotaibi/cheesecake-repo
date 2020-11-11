import React from "react";
//import items from "../item";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";

const ItemDetail = ({ items, deleteitem }) => {
  //const cakeObject = props.cakeObject;
  const cheeseCakeeSlug = useParams().cheeseCakeeSlug;

  const cakeObject = items.find((cake) => cake.slug === cheeseCakeeSlug);

  if (!cakeObject) return <Redirect to="/list" />;

  return (
    <>
      <DetailWrapper>
        <h1> {cakeObject.name}</h1>
        <img src={cakeObject.imag} alt={cakeObject.name} />
        <p> {cakeObject.description}</p>
        <p>{cakeObject.price} KD</p>
        <DeleteButton itemId={cakeObject.id} deleteitem={deleteitem} />
      </DetailWrapper>
    </>
  );
};

export default ItemDetail;
