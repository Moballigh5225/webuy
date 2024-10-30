import { useNavigate, useParams } from "react-router-dom";

const CartScreen = () => {
  const { id } = useParams(); // Get the id from URL params
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1); // Navigate back one step in history
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-black text-white p-4 flex max-w-lg mx-auto">
        <button className="w-auto" onClick={handleBackButton}>
          Back
        </button>
      </div>
      <h1>CartScreen {id}</h1> {/* Display the id if needed */}
    </div>
  );
};

export default CartScreen;
