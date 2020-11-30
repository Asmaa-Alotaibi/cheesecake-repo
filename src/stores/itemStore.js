import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class ItemStore {
  items = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      createItem: action,
      deleteitem: action,
      updateItem: action,
      fetchItems: action,
    });
  }
  fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/items");
      this.items = response.data;
    } catch (error) {
      console.error("ItemStore -> fetchitems -> error", error);
    }
  };

  createItem = async (newItem) => {
    try {
      const formData = new FormData();
      for (const key in newItem) formData.append(key, newItem[key]);

      const res = await axios.post("http://localhost:8000/items", formData);
      console.log("ItemStore -> createItem -> res", res);
      this.items.push(res.data);
    } catch (error) {
      console.log("itemStore -> Createitem -> error", error);
    }
  };

  deleteitem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/items/${itemId}`);
      this.items = this.items.filter((item) => item.id !== +itemId);
    } catch (error) {
      console.log("itemStore -> deleteitem -> error", error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);

      await axios.put(
        `http://localhost:8000/items/${updatedItem.id}`,
        formData
      );
      //update in the frontend
      const item = this.items.find((item) => item.id === updatedItem.id);
      for (const key in item) item[key] = updatedItem[key];

      item.image = URL.createObjectURL(updatedItem.image);

      item.slug = slugify(item.name);
    } catch (error) {
      console.log("ItemStore -> updateItem -> error", error);
    }
  };
}
const itemStore = new ItemStore(); //new instance
itemStore.fetchItems();
export default itemStore;
