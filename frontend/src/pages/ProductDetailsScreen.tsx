import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartStateAtom, productsStateAtom } from "../atom";
import { IconButton, Rating } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ChangeEvent, useState } from "react";

const ProductDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useRecoilState(cartStateAtom);
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useRecoilValue(productsStateAtom);
  const filteredProduct = products.filter((item) => item.id === id);

  // on-change fn for Quantity
  const handleQuantity = (e) => {
    const value = e.target.value;
    setQuantity(value === "" ? 1 : Math.max(Number(value), 1));
  };

  // cartItem Data
  const newCartItem =
    filteredProduct.length > 0
      ? {
          id: filteredProduct[0].id,
          title: filteredProduct[0].title,
          price: filteredProduct[0].price,
          imageUrl: filteredProduct[0].imageUrl,
          quantity: quantity,
        }
      : null;

  const existingItem = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  const handleBuyNow = (id) => {
    if (!newCartItem) return;
    if (existingItem(id)) {
      const updatedCartItem = cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartItems(updatedCartItem);
    } else {
      setCartItems((prevItems) => [...prevItems, newCartItem]);
    }
    navigate(`/cart`);
  };
  return (
    <div>
      {filteredProduct.map((product) => (
        <div className="flex flex-col lg:flex-row justify-center items-start text-center w-full p-8 min-h-screen">
          {/* Left Div */}
          <div className="flex-1 mt-2 p-4 lg:p-4 flex items-center justify-center">
            <div className="bg-gray-300 py-4 mt-8 rounded-md flex justify-center items-center min-h-[300px]">
              <img
                src={product.imageUrl}
                alt=""
                width={300}
                className="max-w-full max-h-full object-contain p-2" // Keeps the aspect ratio with padding for spacing
              />
            </div>
          </div>
          {/* Right Div */}
          <div className="flex flex-col flex-1 p-4 lg:p-12 rounded-lg text-black items-start justify-between">
            {/* Content Section */}
            <div className="flex-grow">
              <h2 className="text-xl lg:text-2xl font-medium text-left mb-2">
                {product.title}
              </h2>
              <div className="flex items-center gap-2 text-sm font-light mb-2">
                <p>
                  <Rating value={product?.rating} />
                </p>
                (150 Reviews)
                <span className="text-gray-400">|</span>
                <p className="text-green-400">
                  {product?.stock === 0 ? "Out Of Stock" : "In Stock"}
                </p>
              </div>
              <div className="text-lg font-medium text-left mb-4">
                ${product.price}
              </div>
              <p className="text-sm font-light text-black text-left mb-16">
                {product.description}
              </p>
              <div className="border-b h-1 w-full mb-16 border-slate-800"></div>
            </div>
            {/* Delivery & Return Section */}
            {/* <div className="flex flex-col space-y-2 mt-4">
              
              
              <div className="flex border-2 border-gray-300 p-2 items-center">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faTruckFast}
                    style={{ color: "#0f0f0f" }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium">Free Delivery</div>
                  <div className="font-light text-sm">
                    Enter Your postal code for Delivery Availability
                  </div>
                </div>
              </div>
              <div className="flex border-2 border-gray-300 p-2 items-center">
                <div className="mr-2">
                  <FontAwesomeIcon
                    icon={faArrowRightArrowLeft}
                    style={{ color: "#0f0f0f" }}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium">Return Delivery</div>
                  <div className="font-light text-sm">
                    Free 30 Days Delivery Returns.
                  </div>
                </div>
              </div>
            </div> */}
            {/* Button Group Section */}
            <div className="flex gap-4 mb-4 mt-14 flex-wrap">
              <div className="row flex flex-1">
                <button
                  className="rounded-md rounded-r-none border border-r-0 border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-300 hover:border-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                >
                  -
                </button>
                <input
                  className="rounded-md rounded-r-none rounded-l-none border border-slate-300 py-2 px-4 w-16 text-center text-sm transition-all shadow-sm text-black focus:outline-none active:text-black active:bg-slate-800"
                  type="number"
                  placeholder="00"
                  onChange={handleQuantity}
                  value={quantity}
                />
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="rounded-md rounded-l-none border border-l-0 border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-300 hover:border-slate-800 focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  +
                </button>
              </div>
              <div className="w-full lg:w-auto">
                <button
                  className="rounded-md border border-slate-300 py-2 px-12 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-red-300 hover:border-slate-800 focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-black active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  onClick={() => handleBuyNow(product.id)}
                >
                  Buy Now
                </button>
              </div>
              <div className="flex-shrink-0">
                <IconButton variant="outlined" className="rounded-full">
                  <FontAwesomeIcon icon={faHeart} />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetailsScreen;
