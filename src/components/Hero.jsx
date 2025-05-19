import React from 'react';

const Hero = () => (
  <header className="bg-[#343434] text-white py-4 px-6 flex justify-between items-center">
    <nav className="flex space-x-6 items-center flex-grow justify-start translate-x-[100px]">
      <h1 className="text-2xl font-bold mr-10 whitespace-nowrap translate-x-[-100px]">Stay Ahead of Crime</h1>
      <ul className="flex space-x-6 text-sm font-semibold">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">About</a></li>
        <li><a href="#" className="hover:text-gray-400">Explore</a></li>
        <li><a href="#" className="hover:text-gray-400">Premium</a></li>
        <li><a href="#" className="hover:text-gray-400">Partnership</a></li>
      </ul>
    </nav>
    <div>
      <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition duration-300">
        Login
      </button>
    </div>
  </header>
);

export default Hero;
