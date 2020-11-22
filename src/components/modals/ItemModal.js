import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../../styles.js";
import ItemStore from "../../stores/itemStore";

const ItemModal = ({ isOpen, closeModal, oldItem }) => {
  const [item, setItem] = useState({
    name: "",
    price: 0,
    description: "",
    imag: "",
  });
  // handle the change in the name field. Basically we will de-structure our cookie object and overwrite the name field:
  const handleChange = (event) => {
    setItem({
      ...item,
      [event.target.name]: event.target.value,
    }); /* make our key dynamic  */
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ItemStore[oldItem ? "updateItem" : "createItem"](item);
    closeModal();
  };
  const handelCancel = (event) => {
    event.preventDefault();
    closeModal();
  };
  const [itemx, setItemx] = useState(
    oldItem
      ? oldItem
      : {
          name: "",
          price: 0,
          description: "",
          image: "",
        }
  );
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h3>New CheeseCake</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              value={itemx.name}
              type="text"
              className="form-control"
              onChange={handleChange}
              name="name"
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
              name="price"
              value={itemx.price}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="description"
            value={itemx.description}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="imag"
            value={itemx.imag}
          />
        </div>
        <CreateButtonStyled className="btn float-right">
          {oldItem ? "Update" : "Create"}
        </CreateButtonStyled>
        <CreateButtonStyled className="btn float-right" onClick={handelCancel}>
          Cancel
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};
export default ItemModal;
