import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] -mt-24 w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>Improving with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex justify-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                    </p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 pt-4'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
                <button className='bg-[#00df9a] w-52 rounded-md font-medium my-6 mx-auto px-6 py-3 text-black'>Get Started</button>
            </div>
        </div>
    )
}

export default Hero