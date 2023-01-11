import React from 'react'
import Double from '../assets/double.png'
import Single from '../assets/single.png'
import Triple from '../assets/triple.png'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
                <div className='flex flex-col justify-center'>
                    <p className='uppercase text-[#00df9a] font-bold'>Data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p className=''>Our data analytics company provides actionable insights and meaningful solutions to help businesses make informed decisions and improve their bottom line. We use cutting-edge technologies and industry expertise to turn data into valuable business intelligence.</p>
                    <button className='text-[#00df9a] w-52 rounded-md font-medium my-6 px-6 py-3 mx-auto md:mx-0 bg-black'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics