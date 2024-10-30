import { useRecoilValue } from "recoil";
import {
  categoryStateAtom,
  productsStateAtom,
  searchStateAtom,
  sortStateAtom,
} from "../atom";
import ContentCard from "./ui/ContentCard";

const Content: React.FC = () => {
  const productsData = useRecoilValue(productsStateAtom); // productData state coming from productStateAtom
  const searchValue = useRecoilValue(searchStateAtom); // searchValue state coming from SearchStateAtom
  const categoryValue = useRecoilValue(categoryStateAtom).trim().toLowerCase(); // categoryVaue state coming from categoryStateAtom
  const orderValue = useRecoilValue(sortStateAtom);

  // Sorting Function
  function sortProducts(items) {
    if (orderValue === "asc") {
      return items.sort((a, b) => a.price - b.price);
    } else if (orderValue === "desc") {
      return items.sort((a, b) => b.price - a.price);
    } else if (orderValue === "rec") {
      return items;
    } else {
      return items;
    }
  }

  // Filtered Data
  const filteredData = productsData.filter((items) => {
    const isCategoryMatch =
      categoryValue === "" || items.category === categoryValue;
    const isSearchMatched =
      items.category.toLowerCase().includes(searchValue.toLowerCase()) ||
      items.brand.toLowerCase().includes(searchValue.toLowerCase()) ||
      items.title.toLowerCase().includes(searchValue.toLowerCase());

    return isCategoryMatch && isSearchMatched;
  });
  const sortedData = sortProducts(filteredData);

  return (
    <div className="content-wrapper flex flex-wrap justify-center gap-8  h-full">
      {/* Mapping the filtered Data */}
      {sortedData.map((product) => (
        <ContentCard key={product.id} products={product} />
      ))}
    </div>
  );
};

export default Content;
