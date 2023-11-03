import React from "react";

const CategorySelection = ({ changeCategory, selectedCategory }) => {
  const categories = ["All", "Startups", "Security", "AI", "Apps", "Tech"];
  return (
    <div>
      <ul className="flex gap-20 mt-5 mb-8 text-lg p-4 shadow-md">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() =>
                changeCategory(category)
              }
              className={selectedCategory==category?"text-orange-500":""}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySelection;
