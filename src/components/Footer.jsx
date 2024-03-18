import React from 'react'
import Logo from '../assets/images/webp/logo.webp'
import { LocSvg, PhNo, Facebook, Instagram, Tweeter, Linkdin } from './Icons'

const Footer = () => {
    return (
        <div className='lg:pt-[48px] md:pt-10 pt-8 bg-gradient-to-bl from-[rgba(46,57,39,0.35)] to-[rgba(40,40,40,0)]'>
            <div className='container mx-auto xl:max-w-[1164px] px-3 lg:mb-[62px] mb-10'>
                <div className='flex flex-wrap justify-between'>
                    <div className='lg:w-[40%] w-full'>
                        <a href="">
                            <img src={Logo} alt="Logo" width={160} className='sm:w-[235px]' />
                        </a>
                        <p className='text-[16px] font-normal leading-[150%] opacity-80 text-white mt-3'>Lorem Ipsum is simply dummy text of the printing <span className='lg:block'>and typesettin industry.</span></p>
                    </div>
                    <div className='lg:w-[57.5%] w-full lg:mt-0 sm:mt-10 mt-6'>
                        <div className='flex  sm:justify-between flex-wrap'>
                            <ul className='lg:w-[20%] sm:w-[26%] w-[50%] flex flex-col'>
                                <li className='text-[16px] font-medium leading-[150%] text-white sm:mb-[18px] mb-[12px]'>Quick links</li>
                                <li className='mb-[10px]'><a href="#home" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Home</a></li>
                                <li className='mb-[10px]'><a href="#about" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>About</a></li>
                                <li className='mb-[10px]'><a href="#product" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Product</a></li>
                                <li><a href="#contact" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Contact</a></li>
                            </ul>
                            <ul className='lg:w-[26%] sm:w-[26%] w-[50%] flex flex-col'>
                                <li className='text-[16px] font-medium leading-[150%] text-white sm:mb-[18px] mb-[12px]'>Links</li>
                                <li className='mb-[10px]'><a href="#privacy" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Privacy Policy</a></li>
                                <li><a href="#service" className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:ease-linear after:duration-300 after:transition-all after:bg-[#BAFF00] after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'>Terms of Service</a></li>
                            </ul>
                            <ul className='lg:w-[40%] sm:w-[30%] w-[50%] flex flex-col sm:mt-0 mt-4'>
                                <li className='text-[16px] font-medium leading-[150%] text-white sm:mb-[23px] mb-[12px]'>Information</li>
                                <li>
                                    <a href='mailto:@Cybertise.com' className='mb-[15px] flex gap-[10px] group'><LocSvg /><p className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:duration-300 after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:group-hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:group-hover:left-0 after:right-0 after:h-[2px] after:rounded-sm hover:text-[#BAFF00] transition-all duration-300 ease-linear'> @Cybertise.com</p></a></li>
                                <li className='mb-[10px]'>
                                    <a href='tel:+1234567890' className='flex gap-[10px] group'><PhNo /><p className='text-[16px] font-normal leading-[150%] text-white opacity-90 relative after:duration-300 after:ease-linear after:transition-all after:bg-[#BAFF00] after:w-0 after:group-hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:group-hover:left-0 after:right-0 after:h-[2px] after:rounded-sm group-hover:text-[#BAFF00] transition-all duration-300 ease-linear'> +123 456 7890</p></a></li>
                                <li className='text-[16px] font-medium leading-[150%] text-white mb-[12px]'>Information</li>
                                <li className='flex items-center gap-[10px]'>
                                    <a href="https://www.facebook.com/" className='group'>
                                        <Facebook />
                                    </a>
                                    <a href="https://www.instagram.com/" className='group'>
                                        <Instagram />
                                    </a>
                                    <a href="https://twitter.com/i/flow/login" className='group'>
                                        <Tweeter />
                                    </a>
                                    <a href="https://www.linkedin.com/" className='group'>
                                        <Linkdin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-[0.5px] border-solid border-[#fcfcfc66] py-3'>
                <p className='text-[14px] font-normal leading-[150%] text-white text-center opacity-80'>© 2024 Cybertise</p>
            </div>
        </div>
    )
}

export default Footer