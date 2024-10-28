import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryStateAtom, productsStateAtom } from "../atom";
import CategoryCard from "./ui/CategoryCard";

const SideNavbar = () => {
  const products = useRecoilValue(productsStateAtom);
  const setCategory = useSetRecoilState(categoryStateAtom);
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];
  console.log(uniqueCategories, "unique cateogry");

  const handleValue = (product) => {
    setCategory(product);
  };
  const handleAll = () => {
    setCategory("");
  };
  return (
    <div className="sidenav-wrapper flex flex-col gap-4 border-r   p-12 h-100">
      {/* Ensure full height */}
      <div className="cursor-pointer">
        <button onClick={handleAll}>All</button>
      </div>

      {uniqueCategories.map((product) => (
        <div
          key={product}
          onClick={() => handleValue(product)}
          className="cursor-pointer"
        >
          <CategoryCard category={product} />
        </div>
      ))}
    </div>
  );
};

export default SideNavbar;
