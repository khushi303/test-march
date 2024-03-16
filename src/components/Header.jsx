import React, { useState } from 'react'
import Logo from '../assets/images/png/logo.png'
import Flag1 from '../assets/images/png/flag1.png';
import Flag2 from '../assets/images/png/flag-2.png';

const Header = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <div className="bg-[url('./assets/images/png/header-bg-img.png')] min-h-screen bg-cover bg-center bg-no-repeat">
            <div className='sm:px-[40px] px-6 bg-[#12121299] sm:py-[22.8px] py-4 flex items-center justify-between'>
                <a href="">
                    <img src={Logo} alt="Logo" width={160} className='sm:w-[235px]' />
                </a>
                <div className='flex items-center lg:gap-10 sm:gap-6 gap-4'>
                    <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:h-full z-40 max-lg:w-full max-lg:z-20 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-black max-lg:min-h-screen max-lg:flex-col gap-[32px] items-center justify-center`}>
                        <li><a href="" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Home</a></li>
                        <li><a href="" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>About</a></li>
                        <li><a href="" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Product</a></li>
                        <li><a href="" className='text-[16px] font-normal text-white leading-[150%] after:duration-300 relative after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Contact</a></li>

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
    )
}

export default Header

// border: 0.4px solid #FFFFFF