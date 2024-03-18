import React from 'react'

const User = () => {
    return (
        <div className='md:py-[60px] relative pt-10 pb-5'>
            <div className='container mx-auto xl:max-w-[1164px] px-3'>
                <div className="lg:max-w-[1036px] md:max-w-[700p x] sm:max-w-[600px] max-w-[430px] mx-auto pt-[36px] pb-[35px] border border-solid border-[#FFFFFF29] transition-all duration-300 ease-linear hover:border-[#BAFF00] bg-[url('./assets/images/webp/bg-user.webp')] bg-cover bg-center bg-no-repeat rounded-3xl flex items-center lg:justify-between justify-center flex-wrap relative cursor-pointer">
                    <div data-aos="zoom-in" className='lg:w-[30%] sm:w-[40%] w-full px-3 relative z-10'>
                        <p className='sm:text-[48px] text-[33px] font-medium text-center text-[#BAFF00] sm:mb-4 mb-2 leading-[110%]'>1K+</p>
                        <p className='text-[24px] font-normal text-center leading-[110%] text-white opacity-80'>Partners Globally</p>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[30%] sm:w-[40%] w-full sm:mt-0 mt-8 px-3 relative z-10'>
                        <p className='sm:text-[48px] text-[33px] font-medium text-center text-[#BAFF00] sm:mb-4 mb-2 leading-[110%]'>120+</p>
                        <p className='text-[24px] font-normal text-center leading-[110%] text-white opacity-80'>Countries Served</p>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[30%] sm:w-[40%] w-full lg:mt-0 mt-8 px-3 relative z-10'>
                        <p className='sm:text-[48px] text-[33px] font-medium text-center text-[#BAFF00] sm:mb-4 mb-2 leading-[110%]'>350K+</p>
                        <p className='text-[24px] font-normal text-center leading-[110%] text-white opacity-80'>Users Worldwide</p>
                    </div>
                    <div className='max-w-[436.2px] w-full h-[68.75px] bg-[#8AEA44] opacity-20 blur-[70px] absolute top-[28%] md:left-[27%] left-0'></div>
                </div>
            </div>
        </div>
    )
}

export default User
