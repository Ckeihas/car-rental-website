"use client"
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'


const Hero = () => {

    const handleScroll = () => {}
  return (
    <div className="hero">
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find, Book or Rent a Car In Easy Steps
            </h1>
            <p className='hero__subtitle'>Get a car whenever and wherever you need it with your IOS or Android device!</p>
            <CustomButton 
            title='Explore Cars'
            containerStyles='bg-primary-blue text-white mt-10 rounded-full'
            handleClick={handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/auto.png' alt='hero' fill className='object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Hero