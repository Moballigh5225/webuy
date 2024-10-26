import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProductsProps {
  products: {
    id: string;
    title: string;
    description: string;
    price: number;
    category: string;
    brand: string;
    imageUrl: string;
    stock: number;
    rating: number;
  };
}

const ContentCard: React.FC<ProductsProps> = ({ products }) => {
  const navigate = useNavigate();
  const handleNavigate = (id: ProductsProps) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="content-card-wrapper flex flex-col items-center gap-4 p-4">
      {/* Added flexbox and padding */}
      <Card className="w-60 shadow-lg rounded-lg overflow-hidden">
        {/* Updated card with shadow and rounded corners */}
        <CardHeader shadow={false} floated={false} className="h-auto">
          <img
            src={products.imageUrl}
            alt="card-image"
            className="w-full h-40 rounded-t-lg object-cover" // Rounded only at the top
          />
        </CardHeader>
        <CardBody className="p-4">
          {/* Added padding to CardBody */}
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {products.title.slice(0, 20)}
            </Typography>
          </div>
          <div>
            <Typography color="blue-gray" className="font-medium">
              $95.00
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {/* Description could go here if needed */}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {products?.stock > 0 ? (
            <Button
              onClick={() => handleNavigate(products.id)}
              ripple={false}
              fullWidth={true}
              className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:bg-blue-gray-700 hover:text-white focus:bg-blue-gray-800 focus:text-white active:bg-blue-gray-900" // Adjusted hover styles
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              ripple={false}
              fullWidth={true}
              disabled={true}
              className="bg-gray-500/10 text-gray-500 shadow-none hover:bg-gray-500 hover:text-white focus:bg-gray-500 focus:text-white active:bg-gray-500" // Adjusted hover styles
            >
              Out of Stock
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContentCard;
