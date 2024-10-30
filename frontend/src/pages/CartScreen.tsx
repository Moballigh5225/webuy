import { useRecoilValue } from "recoil";
import { cartStateAtom } from "../atom";

const CartScreen: React.FC = () => {
  const cartItems = useRecoilValue(cartStateAtom);

  console.log(cartItems, "cartItems");
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="bg-white shadow-md rounded-lg p-6 flex-1 mb-4 md:mr-4">
          {/* Cart items will go here */}
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-1/3">
          {/* Pricing and Checkout button will go here */}
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
