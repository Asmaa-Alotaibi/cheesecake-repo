import { DetailWrapper } from "../styles";
import { useParams } from "react-router-dom";
import bakeryStore from "../stores/bakeryStore";
import ItemList from "./ItemList";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import itemStore from "../stores/itemStore";

const BakeryDetail = () => {
  const { bakerySlug } = useParams();
  const bakery = bakeryStore.bakeries.find(
    (_bakery) => _bakery.slug === bakerySlug
  );
  console.log("BakeryDetail -> bakery", bakery);
  let items = bakery.items.map((item) => itemStore.getItemById(item.id));
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{bakery.name}</h4>
          <img src={bakery.image} alt={bakery.name} />
          <AddButton bakery={bakery} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default observer(BakeryDetail);
