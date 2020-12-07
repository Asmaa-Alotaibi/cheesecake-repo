import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  margin: 20px;
  img {
    width: 15em;
    height: 15em;
    object-fit: cover;
  }
  p {
    text-align: center;
  }
`;

const BakeryItem = ({ bakery }) => {
  return (
    <ItemWrapper>
      <Link to={`/bakeries/${bakery.slug}`}>
        <img src={bakery.image} alt={bakery.name} />;<p>{bakery.name}</p>
      </Link>
    </ItemWrapper>
  );
};

export default observer(BakeryItem);
