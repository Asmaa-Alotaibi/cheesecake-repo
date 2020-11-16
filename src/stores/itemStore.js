import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import items from "../item";

class ItemStore {
  items = items;

  constructor() {
    makeObservable(this, {
      items: observable,
      createItem: action,
      deleteitem: action,
    });
  }
  createItem = (newItem) => {
    newItem.id = this.items[this.items.length - 1].id + 1;
    newItem.slug = slugify(newItem.name);
    this.items.push(newItem);
  };

  deleteitem = (itemId) => {
    this.items = this.items.filter((e) => e.id !== itemId);
  };
}
const itemStore = new ItemStore();
export default itemStore;
