import React from 'react'
import { NavLink } from 'react-router-dom'
import {BsMeta} from 'react-icons/bs';
import {FaDribbble, FaTwitter} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import {RxCross1} from 'react-icons/rx';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    
    const toggleMenu=()=>{
        setIsMenuOpen(prev=>!prev);
    }


    const navItems=[
        {path:"/", link:"Home"},
        {path:"/services", link:"Services"},
        {path:"/about", link:"About"},
        {path:"/blogs", link:"Blogs"},
        {path:"/contact", link:"Contact"},
       
    ]
  return (
    <header className='bg-black fixed top-0 left-0 right-0'>
        <nav className='px-4 py-4 flex justify-between items-center max-w-6xl mx-auto'>
            <a href="/" className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

            <ul className='text-white md:flex gap-12 text-lg hidden items-center'>
                {
                    navItems.map(({path, link})=>{
                        return <li key={path}><NavLink to={path} className={
                            ({isActive, isPending})=>isActive?"text-orange-500 border-b border-orange-500":""
                        }>{link}</NavLink></li>
                    })
                }
            </ul>

            <div className='text-white lg:flex hidden gap-4 items-center'>
                <a href="/" className='hover:text-orange-500'><BsMeta/></a>
                <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
                <a href="/" className='hover:text-orange-500'><FaTwitter/></a>
                <button className='bg-orange-500 py-2 px-4 rounded-md font-bold outline-none hover:bg-white hover:text-orange-500'>Log in</button>
            </div>

            <div className='text-white text-2xl md:hidden'>
                <button onClick={toggleMenu}>{isMenuOpen?<RxCross1/>:<AiOutlineMenu/>}</button>
            </div>
        </nav>
        <div>
                <ul className={`md:hidden mt-4 p-10 text-lg space-y-6 bg-white ${isMenuOpen?"fixed left-0 w-full transition-all ease-out duration-150 w-full":"hidden"}`}>
                    {
                        navItems.map(({path, link})=>{
                            return <li onClick={toggleMenu} key={path}><NavLink to={path}  className={
                            ({isActive, isPending})=>isActive?"text-orange-500 border-b border-orange-500":""
                        }>{link}</NavLink></li>
                        })
                    }
            </ul>
        </div>

    </header>
  )
}

export default Navbar;