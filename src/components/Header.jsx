import React, { useState } from 'react'
import Logo from '../assets/images/png/logo.png'
import Flag1 from '../assets/images/png/flag1.png';
import Flag2 from '../assets/images/png/flag-2.png';
import Hatimg from '../assets/images/png/hatimg-header.png';
import CommonBtn from './CommonBtn'

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className="bg-[url('./assets/images/png/header-bg-img.png')] bg-cover bg-center bg-no-repeat">
            <div className='bg-[#12121299] w-full'>
                <div className='sm:px-[40px] px-6 sm:py-[22.8px] mx-auto py-4 flex items-center justify-between w-full 2xl:max-w-[1440px]'>
                    <a href="">
                        <img src={Logo} alt="Logo" width={160} className='sm:w-[235px]' />
                    </a>
                    <div className='flex items-center lg:gap-10 sm:gap-6 gap-4'>
                        <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-40 max-lg:w-full max-lg:z-20 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-black max-lg:min-h-screen max-lg:flex-col gap-[32px] items-center justify-center`}>
                            <li onClick={() => setNav(!nav)}><a href="#home" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Home</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#about" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>About</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#product" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Product</a></li>
                            <li onClick={() => setNav(!nav)}><a href="#contact" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Contact</a></li>

                        </ul>
                        <div className='flex items-center gap-[10px]'>
                            <a href="">
                                <img src={Flag1} alt="Flag1" width={20} height={20} className='rounded-[64px] border-[0.4px] border-solid border-white' />
                            </a>
                            <a href="">
                                <img src={Flag2} alt="Flag1" width={20} height={20} className='rounded-[64px] border-[0.4px] border-solid border-white' />
                            </a>
                        </div>
                        <div onClick={() => setNav(!nav)} className='lg:hidden w-[28px] h-[20px] relative z-20 flex justify-between flex-col cursor-pointer'>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 rounded-[3px] bg-[#BAFF00] ease-linear transition-all' : "transition-all duration-300 bg-[#BAFF00] rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full bg-[#BAFF00] duration-300 rounded-[3px] ease-linear transition-all' : "duration-300 rounded-[3px] bg-[#BAFF00] ease-linear transition-all hidden"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 bg-[#BAFF00] rounded-[3px] ease-linear transition-all' : "transition-all duration-300 bg-[#BAFF00] rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 lg:pt-[137px] lg:pb-[226px] md:py-[100px] sm:py-[80px] py-[60px] flex items-center justify-center flex-col'>
                <img src={Hatimg} alt="Hatimg" width={159.73} height={121.97} className='' />
                <h1 className='text-[64px] font-semibold text-center leading-[96.5%] text-white mt-[23.53px] mb-[35.12px]'>Experts in Cyber <span className='block'>Security</span></h1>
                <CommonBtn btnname="Discover" />
            </div>
        </div>
    )
}

export default Header