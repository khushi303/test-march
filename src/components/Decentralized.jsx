import React from 'react'
// import { Map } from './Icons'
import Map from '../assets/images/webp/map.webp'

const Decentralized = () => {
    return (
        <div className='lg:pt-[79px] xl:pb-[171px] lg:pb-[120px] lg:py-[60px] md:py-[40px] py-6 relative'>
            <div className='container mx-auto xl:max-w-[1164px] px-3 relative z-20'>
                <h2 data-aos="zoom-in" className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white text-center mb-[10px]'>Decentralized Infrastructure, <span className='text-[#BAFF00] lg:block'>Globally Distributed.</span></h2>
                <div data-aos="zoom-in" className='lg:mt-[60px] md:mt-[40px] mt-5 cursor-pointer'>
                    <img src={Map} alt='Map' className='w-full' />
                </div>
            </div>
            <div className='w-[447px] h-[397px] bg-[#7CF623] opacity-20 blur-[220px] absolute left-[-20%] bottom-[-2%] z-[1]'></div>
        </div>
    )
}

export default Decentralized