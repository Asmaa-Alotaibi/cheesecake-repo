import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import instance from "./instance";

class ItemStore {
  items = [];
  loading = true;
  constructor() {
    makeObservable(this, {
      items: observable,
      loading: observable,
      createItem: action,
      deleteitem: action,
      updateItem: action,
      fetchItems: action,
    });
  }
  getItemById = (itemId) => this.items.find((item) => item.id === itemId);

  fetchItems = async () => {
    try {
      const response = await instance.get("/items");
      this.items = response.data;
      this.loading = false;
    } catch (error) {
      console.error("ItemStore -> fetchitems -> error", error);
    }
  };

  createItem = async (newItem, bakery) => {
    try {
      const formData = new FormData();
      for (const key in newItem) formData.append(key, newItem[key]);

      const res = await instance.post(`/bakeries/${bakery.id}/items`, formData);
      console.log("ItemStore -> createItem -> res", res);
      this.items.push(res.data);
      bakery.items.push({ id: res.data.id });
    } catch (error) {
      console.log("itemStore -> Createitem -> error", error);
    }
  };

  deleteitem = async (itemId) => {
    try {
      await instance.delete(`/items/${itemId}`);
      this.items = this.items.filter((item) => item.id !== +itemId);
    } catch (error) {
      console.log("itemStore -> deleteitem -> error", error);
    }
  };

  updateItem = async (updatedItem) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);

      await instance.put(`/items/${updatedItem.id}`, formData);
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
