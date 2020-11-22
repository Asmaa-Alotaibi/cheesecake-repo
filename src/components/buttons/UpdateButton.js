import React from "react";
import ItemModal from "../modals/ItemModal";
import { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ItemModal isOpen={isOpen} closeModal={closeModal} oldItem={item} />
    </>
  );
};

export default UpdateButton;
