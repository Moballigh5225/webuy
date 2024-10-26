import { useRecoilValue } from "recoil";
import { productsStateAtom } from "../atom";
import ContentCard from "./ui/ContentCard";

const Content: React.FC = () => {
  const productsData = useRecoilValue(productsStateAtom);
  console.log(productsData, "products Data");

  return (
    <div className="content-wrapper flex flex-wrap justify-center gap-8 p-8 h-full">
      {" "}
      {/* Ensure full height */}
      {productsData.map((product) => (
        <ContentCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default Content;
