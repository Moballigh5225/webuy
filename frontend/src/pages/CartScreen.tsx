import { useRecoilValue } from "recoil";
import { cartStateAtom } from "../atom";

const CartScreen: React.FC = () => {
  const cartItems = useRecoilValue(cartStateAtom);

  console.log(cartItems, "cartItems");
  return (
    <div className="w-ful p-4  ">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className=" p-2 flex-1 mb-4 md:mr-4">
          {/* Cart items will go here */}
          <div className="bg-white shadow-md rounded-lg  flex p-4 justify-between ">
            <div className="">Product</div>
            <div className="">Price</div>
            <div className="">Quantity</div>
            <div className="">Subtotal</div>
          </div>
        </div>
        <div className=" p-2 w-full md:w-1/3">
          {/* Pricing and Checkout button will go here */}
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
            <div className="">Cart Total:</div>
            <p className="border-b-2"></p>
            <div className="">Subtotal:</div>
            <p className="border-b-2"></p>
            <div className="">Shipping:</div>
            <p className="border-b-2"></p>
            <div className="">Total:</div>
            <button
              className="rounded-md border border-slate-300 py-2 px-12 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-300 hover:border-slate-800 focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
