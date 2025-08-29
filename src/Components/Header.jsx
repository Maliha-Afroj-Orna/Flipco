import React, { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white border border-b border-gray-300'>
        <div className='flex items-center justify-between px-4 md:px-12 py-2'>
            <div>
                <a href="#home"><img className='w-28 h-12 md:w-36 md:h-20 object-contain' src="/images/logo.jpg" alt="Flipco Logo" /></a>
            </div>

            <nav className="hidden md:block">
                <ul className='flex space-x-4 lg:space-x-10'>
                    <li><a href="#home" className={navLink}>Home</a></li>
                    <li><a href="#about" className={navLink}>About</a></li>
                    <li><a href="#services" className={navLink}>Services</a></li>
                    <li><a href="#brands" className={navLink}>Brands</a></li>
                    <li><a href="#contact" className={navLink}>Contact</a></li>
                </ul>
            </nav>

            <button className="md:hidden p-2 text-gray-700 hover:text-black"
            onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>
        </div>


        {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-2 py-4 px-6">
            <li><a href="#home" className={navLink}>Home</a></li>
            <li><a href="#about" className={navLink}>About</a></li>
            <li><a href="#services" className={navLink}>Services</a></li>
            <li><a href="#brands" className={navLink}>Brands</a></li>
            <li><a href="#contact" className={navLink}>Contact</a></li>
          </ul>
        </nav>
        )}
    </header>
  )
}


const navLink = "font-bold text-sm md:text-base lg:text-lg cursor-pointer hover:bg-[#3a4d64] py-2 px-3 md:px-4 rounded-md hover:text-white";
