import { BsPlusCircle } from "react-icons/bs";
import ItemiModal from "../modals/ItemModal.js";
import { useState } from "react";

const AddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <ItemiModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};
export default AddButton;
