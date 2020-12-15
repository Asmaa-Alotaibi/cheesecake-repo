import { DetailWrapper } from "../styles";
import { Redirect, useParams } from "react-router-dom";
import bakeryStore from "../stores/bakeryStore";
import ItemList from "./ItemList";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import itemStore from "../stores/itemStore";
import authStore from "../stores/authStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (_bakery) => _bakery.slug === bakerySlug
  );
  console.log("BakeryDetail -> bakery", bakery);

  if (!bakery) return <Redirect to="/bakeries" />;

  const itemsL = bakery.items.map((item) => itemStore.getItemById(item.id));

  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} alt={bakery.name} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ItemList items={itemsL} bakery={bakery} />
        {authStore.user && <AddButton bakery={bakery} />}
      </div>
    </div>
  );
};

export default observer(BakeryDetail);
