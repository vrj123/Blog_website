import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const Sidebar = ({}) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:5000/blogs");
      const data = await response.json();
      setBlogs(data);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 max-w-[350px]">
        <h1 className="text-2xl font-bold">Latest blogs</h1>
        {blogs.slice(0, 5).map((blog, index) => (
          <div key={index} className="flex flex-col gap-2 border-b-2 p-2">
            <p className="font-semibold">{blog.title}</p>
            <button className="flex flex-inline items-center gap-2 hover:text-blue-500">
              Read more <BsArrowRight className="mt-1"/>
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 max-w-[350px]">
        <h1 className="text-2xl font-bold">Popular blogs</h1>
        {blogs.slice(5, 9).map((blog, index) => (
          <div key={index} className="flex flex-col gap-2 border-b-2 p-2">
            <p className="font-semibold">{blog.title}</p>
            <button className="flex flex-inline items-center gap-2 hover:text-blue-500">
              Read more <BsArrowRight className="mt-1"/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
