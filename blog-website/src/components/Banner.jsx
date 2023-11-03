import React from 'react';
import { Link } from "react-router-dom";
import {BsArrowRight} from 'react-icons/bs';

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black text-center mx-auto text-white'>
        <div className='text-4xl font-bold lg:text-7xl md:text-5xl mb-2 md:mb-4'>
            <h1>Welcome to Our Blog</h1>
        </div>
        <div>
            <p className='md:text-lg'>Start your blog today and join join cimmunity of writers and readers who are passionate about sharing their stories and ideas. We offer evrything you need to get started , from helpful tips and tutorials.</p>
        </div>
        <div className='md:mt-6 mt-4'>
            <Link to='/' className='inline-flex items-center gap-2 hover:text-orange-500'>Learn More<BsArrowRight/></Link>
        </div>
    </div>
  )
}

export default Banner;