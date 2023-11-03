import React, { useEffect, useState } from "react";
import Blogcards from "./Blogcards";
import CategorySelection from "./CategorySelection";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [category, setCategory] = useState("All");
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/blogs?page=${currentPage} & limit=${pageSize}`;

      if (category) {
        url += `&category=${category}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, category, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);
    setCurrentPage(1);
    setActiveCategory(selectedCategory);
  };
  return (
    // <div>BlogPage</div>
    <div>
      <div>
        <CategorySelection
          changeCategory={handleCategoryChange}
          selectedCategory={category}
        />
      </div>
      <div className="flex gap-10">
        <div>
          <Blogcards
            blogs={blogs}
            currentPage={currentPage}
            pageSize={pageSize}
            category={category}
          />
        </div>
        <div>
            <Sidebar/>
        </div>
      </div>
      <div>
        <Pagination
          pageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
          category={category}
        />
      </div>
    </div>
  );
};

export default BlogPage;
