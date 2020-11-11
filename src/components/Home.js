import React from "react";
import photo1 from "../Cheesecake.jpg";
import { Title, BigImg } from "../styles";

const Home = () => {
  return (
    <div>
      <title>CheeseCake Shop</title>
      <Title>Yammy CheeseCake just for you...</Title>
      <BigImg src={photo1} alt="cheesecake shop" />
    </div>
  );
};

export default Home;
