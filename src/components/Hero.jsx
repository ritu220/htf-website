import React from 'react';
import backImg from "/images/image1.png";
import HeroImg from "/images/hero.png";

const Hero = () => {
  return (
    <div className='relative overflow-y-hidden'>
      <img src={backImg} alt="" className='w-screen h-screen brightness-50'/>
    <div className='absolute right-10 top-24'>
        <img src={HeroImg} alt=""/>
    </div>
    <div className='top-1/3 lg:left-20 absolute p-2 lg:w-1/2'>
        <div className='py-2 pl-3'>
            <h1 className='text-white md:text-7xl max-sm:text-5xl font-bold mb-5 '>HACK OVERFLOW</h1>
            <p className='text-white  mb-5 text-left'>Hackoverflow hackathon lorem ipsum doler amet, best hackathon. participate and be the best developer. Hackoverflow hackathon lorem ipsum doler amet, best hackathon. participate and be the best developer</p>
        <div className='flex gap-4 mt-10'>
        <button className='border-2 border-white px-6 py-2 cursor-pointer hover:bg-gray-600 text-white'>Check Roadmap</button>
        <button className='bg-white px-6 py-2 cursor-pointer hover:bg-gray-600'>Register</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Hero
