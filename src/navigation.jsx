import React, { useEffect, useState } from 'react'

import { TiHome } from "react-icons/ti";
import { IoIosEye } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

import { CiMenuFries } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci";

import logo from './assets/Logo/x_transparent.png'

const Navigation = () => {
    const [isActive, setIsActive] = useState('Home');
    const [isScrolled, setIsScrolled] = useState(false);

    const [isOpened, setIsOpen] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function activeSection(sectionName){
        setIsActive(sectionName);
    }



    return (
        <nav className="relative h-auto w-full">
            <div className={`fixed w-full h-20 z-10 transition-all duration-300
                ${(isScrolled || isOpened) ? "bg-section-background/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                
                <div className="w-full h-full flex items-center justify-between px-5">
                    <img src={logo} alt="Logo" className="max-h-[60px] w-auto object-contain"  />

                    <button
                        className="text-white text-3xl lg:hidden"
                        onClick={() => setIsOpen(!isOpened)}
                        aria-label="Menu"
                    >
                        {isOpened ? <CiMenuFries /> : <CiMenuBurger />}
                    </button>
                </div>

                {isOpened && (
                    <div className={`absolute top-20 left-0 w-full bg-section-background/60 backdrop-blur-md shadow-md flex flex-col items-center gap-4 py-5 text-white transition-all duration-300 lg:hidden`}>
                        <a href="#Home"
                           className={`font-section flex gap-1 items-center ${isActive === 'Home' ? 'text-menu-section' : ''}`}
                           onClick={() => activeSection('Home')}>
                           <TiHome className="w-6 h-6" /> Home
                        </a>
                        <a href="#Preview"
                           className={`font-section flex gap-1 items-center ${isActive === 'Preview' ? 'text-menu-section' : ''}`}
                           onClick={() => activeSection('Preview')}>
                           <IoIosEye className="w-6 h-6" /> Preview
                        </a>
                        <a href="#Features"
                           className={`font-section flex gap-1 items-center ${isActive === 'Features' ? 'text-menu-section' : ''}`}
                           onClick={() => activeSection('Features')}>
                           <IoIosRocket className="w-6 h-6" /> Features
                        </a>
                        <a href="#Bundles"
                           className={`font-section flex gap-1 items-center ${isActive === 'Bundles' ? 'text-menu-section' : ''}`}
                           onClick={() => activeSection('Bundles')}>
                           <FaShoppingCart className="w-6 h-6" /> Bundles
                        </a>
                        <a href="#" className="font-section px-4 py-1 rounded-xl bg-menu-section">Buy It!</a>
                    </div>
                )}

                <div className="hidden lg:flex justify-end items-center gap-6 absolute top-0 right-0 h-full pr-5">
                    <a href="#Home" className={`font-section flex gap-1 items-center ${isActive === 'Home' ? 'text-menu-section' : 'text-white'}`} onClick={() => activeSection('Home')}>
                        <TiHome className="w-6 h-6" /> Home
                    </a>
                    <a href="#Preview" className={`font-section flex gap-1 items-center ${isActive === 'Preview' ? 'text-menu-section' : 'text-white'}`} onClick={() => activeSection('Preview')}>
                        <IoIosEye className="w-6 h-6" /> Preview
                    </a>
                    <a href="#Features" className={`font-section flex gap-1 items-center ${isActive === 'Features' ? 'text-menu-section' : 'text-white'}`} onClick={() => activeSection('Features')}>
                        <IoIosRocket className="w-6 h-6" /> Features
                    </a>
                    <a href="#Bundles" className={`font-section flex gap-1 items-center ${isActive === 'Bundles' ? 'text-menu-section' : 'text-white'}`} onClick={() => activeSection('Bundles')}>
                        <FaShoppingCart className="w-6 h-6" /> Bundles
                    </a>
                    <a href="#" className="font-section px-4 py-1 rounded-xl bg-menu-section">Buy It!</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation
