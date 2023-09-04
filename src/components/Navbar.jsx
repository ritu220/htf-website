import React, { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className='absolute z-10 lg:w-full'>
      <div className='text-white max-w-screen-lg w-11/12 mx-auto items-center flex justify-end gap-10 pt-8'>
        <div className='lg:hidden cursor-pointer' onClick={toggleMenu}>
          {/* Hamburger Menu Icon */}
          <div className={`w-6 h-0.5 bg-white mb-1 ${showMenu ? 'rotate-45' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1 ${showMenu ? 'hidden' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white ${showMenu ? '-rotate-45' : ''}`}></div>
        </div>
        {/* Conditionally render navigation links for md and above */}
        <ul className='hidden md:flex md:gap-10'>
          <li className='cursor-pointer'>About</li>
          <li className='cursor-pointer'>Roadmap</li>
          <li className='cursor-pointer'>Challenges</li>
          <li className='cursor-pointer'>Prizes</li>
        </ul>
        {/* Conditionally render register button for md and above */}
        <button className='md:block hidden border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600'>
          Register
        </button>
      </div>
      {/* Conditionally render the sidebar for screens smaller than md */}
      {showMenu && (
        <div className='lg:hidden fixed top-0 left-0 w-64 h-full bg-white transform transition-transform duration-300 ease-in-out translate-x-0'>
          <div className='flex justify-end pt-2 pr-2'>
            <button className='text-black' onClick={closeMenu}>
              &#10005; {/* Cross Icon */}
            </button>
          </div>
          <ul className='pt-16 pl-4'>
            <li className='cursor-pointer py-2'>About</li>
            <li className='cursor-pointer py-2'>Roadmap</li>
            <li className='cursor-pointer py-2'>Challenges</li>
            <li className='cursor-pointer py-2'>Prizes</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
