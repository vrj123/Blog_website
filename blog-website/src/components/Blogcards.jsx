import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillPersonFill} from 'react-icons/bs';

const Blogcards = ({blogs, currentPage, category, pageSize}) => {

    const filteredBlogs=blogs.filter((blog)=>category=="All"?true:blog.category===category)
    .slice((currentPage-1)*pageSize, currentPage*pageSize);
    
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
        {
            filteredBlogs.map((blog, index)=> <Link key={index} className="flex flex-col gap-3 p-4 shadow-xl rounded-sm sm:w-full max-w-[400px] mx-auto">
            <div>
                <img src={blog.image} alt="" />
            </div>
            <div>
                <h3 className='hover:text-blue-500 font-bold'>{blog.title}</h3>
            </div>
            <div>
                <BsFillPersonFill className='inline-flex items-center gap-2'/><span className='text-gray-600'>{blog.author}</span>
            </div>
            <div>
                <p className='text-gray-400'>Published {blog.published_date}</p>
            </div>
            </Link>)
        }
    </div>
  )
}

export default Blogcards;