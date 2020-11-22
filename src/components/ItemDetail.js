import React from "react";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Redirect, useParams } from "react-router-dom";
import ItemStore from "../stores/itemStore";
import { observer } from "mobx-react";

const ItemDetail = () => {
  const cheeseCakeeSlug = useParams().cheeseCakeeSlug;

  const cakeObject = ItemStore.items.find(
    (cake) => cake.slug === cheeseCakeeSlug
  );

  if (!cakeObject) return <Redirect to="/list" />;

  return (
    <>
      <DetailWrapper>
        <h1> {cakeObject.name}</h1>
        <img src={cakeObject.imag} alt={cakeObject.name} />
        <p> {cakeObject.description}</p>
        <p>{cakeObject.price} KD</p>
        <DeleteButton itemId={cakeObject.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(ItemDetail);
