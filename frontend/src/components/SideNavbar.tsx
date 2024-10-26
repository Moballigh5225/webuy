import { useRecoilValue } from "recoil";
import { productsStateAtom } from "../atom";
import CategoryCard from "./ui/CategoryCard";

const SideNavbar = () => {
  const products = useRecoilValue(productsStateAtom);

  return (
    <div className="sidenav-wrapper flex flex-col gap-8   border-r p-12 h-100">
      {/* Ensure full height */}
      {products.map((product) => (
        <CategoryCard key={product.id} category={product.category} />
      ))}
    </div>
  );
};

export default SideNavbar;
