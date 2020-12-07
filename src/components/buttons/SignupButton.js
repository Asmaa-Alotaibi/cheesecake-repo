import React, { useState } from "react";
import { AuthButtonStyled } from "../../styles";
import Signup from "../modals/Signup";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
