import { atom } from "recoil";
import products from "../utils/product";

export const productsStateAtom = atom({
  key: "productsStateAtom",
  default: products,
});
