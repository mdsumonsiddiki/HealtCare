import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import { MdArrowOutward } from "react-icons/md";


const Nav = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Services' },
        { id: 3, text: 'Blog' },
        { id: 4, text: 'About us' },
    ];

    return (
        <div className="py-4">
            <div className='flex justify-between items-center container px-3 md:px-0'>
                {/* Logo */}
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex md:gap-6'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                        >
                            <Link className=" hover:text-yellow duration-300 text-xl  text-textColorPrimary ">{item.text}</Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <button className="text-textColorPrimary font-medium border-2 py-3 px-6 rounded-xl border-textColorPrimary duration-300 flex items-center gap-1 hover:text-yellow hover:border-yellow">
                        Appointment <span className="text-2xl"><MdArrowOutward /></span>
                    </button>
                </div>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 z-50 top-0 w-[60%] h-full border-r p-2  bg-yellow ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 z-50 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <li >
                        <Link to='/' className="py-7 w-full inline-block bg-white rounded-md">
                            <img className="mx-auto" src={logo} alt="logo" />
                        </Link>
                    </li>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                        >
                            <Link className="px-3 py-4 mb-2 rounded-md bg-white w-full inline-block text-xl font-medium text-textColorPrimary shadow-lg">{item.text}</Link>
                        </li>
                    ))}
                    <li>
                        <button className="px-3 py-4 mb-2 rounded-md bg-white w-full text-xl font-medium text-textColorPrimary flex gap-1 items-center flex-wrap shadow-lg">
                            Appointment<span className="text-2xl"><MdArrowOutward /></span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;