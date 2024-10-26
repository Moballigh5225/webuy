import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productsStateAtom } from "../atom";

const ProductDetailsScreen = () => {
  const { id } = useParams();
  const products = useRecoilValue(productsStateAtom);
  const filteredData = products.filter((item) => item.id === id);
  console.log(filteredData, "filtered Data");
  return <div>{filteredData[0].title}</div>;
};

export default ProductDetailsScreen;
