import React from "react";
import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const itemId = props.itemId;
  const handleDelete = () => {
    props.deleteitem(itemId);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};
export default DeleteButton;
