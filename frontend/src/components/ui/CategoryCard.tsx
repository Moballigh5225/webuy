interface CategoryProps {
  category: string;
}

const CategoryCard: React.FC<CategoryProps> = ({ category }) => {
  const formattedCategory =
    category.charAt(0).toUpperCase() + category.slice(1);
  return (
    <div className="category-card-wrapper">
      <p>{formattedCategory}</p>
    </div>
  );
};
export default CategoryCard;
