import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productsStateAtom } from "../atom";

const ProductDetailsScreen = () => {
  const { id } = useParams();
  const products = useRecoilValue(productsStateAtom);
  const filteredProduct = products.filter((item) => item.id === id);
  return (
    <div>
      {filteredProduct.map((product) => (
        <div className="parent=wrapper flex justify-center items-end w-full">
          <div className="flex-1 bg-red-600">
            <div className="">left div</div>
          </div>
          <div className="flex-1 bg-blue-600">
            <div className="right">right div</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsScreen;
