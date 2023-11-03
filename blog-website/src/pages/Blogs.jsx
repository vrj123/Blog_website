import React from 'react'
import BlogPage from '../components/BlogPage'

const Blogs = () => {
  return (
    <div>
      <div>
        <h2 className='bg-black text-center text-4xl md:text-5xl lg:text-7xl font-bold py-40 text-white'>Our Blogs</h2>
      </div>

      <div className='max-w-6xl mx-auto'>
        <BlogPage/>
      </div>
    </div>

    
  )
}

export default Blogs