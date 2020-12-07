import { makeObservable, observable, action } from "mobx";
import instance from "./instance";

class BakeryStore {
  bakeries = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      bakeries: observable,
      loading: observable,
      createBakery: action,
      fetchBakeries: action,
    });
  }
  fetchBakeries = async () => {
    try {
      const response = await instance.get("/bakeries");
      this.bakeries = response.data;
      this.loading = false;
    } catch (error) {
      console.error("BakeryStore -> fetchbakeries -> error", error);
    }
  };

  createBakery = async (newBakery) => {
    try {
      const formData = new FormData();
      for (const key in newBakery) formData.append(key, newBakery[key]);

      const res = await instance.post("/bakeries", formData);
      console.log("BakeryStore -> createBakery -> res", res);
      this.bakeries.push(res.data);
    } catch (error) {
      console.log("bakeryStore -> Createbakery -> error", error);
    }
  };
}
const bakeryStore = new BakeryStore(); //new instance
bakeryStore.fetchBakeries();
export default bakeryStore;
