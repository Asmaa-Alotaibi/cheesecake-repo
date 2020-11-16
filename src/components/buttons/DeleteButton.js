import React from "react";
import { DeleteButtonStyled } from "../../styles";
import ItemStore from "../../stores/itemStore";

const DeleteButton = ({ itemId }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    ItemStore.deleteitem(itemId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
export default DeleteButton;
