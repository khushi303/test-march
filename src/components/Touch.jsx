import React, { useState } from 'react'


const Touch = () => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Email validation
        if (!email.trim().match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
            // Handle form submission here
            console.log('Email submitted:', email);
        }
    };
    return (
        <div id='contact' className="xl:mb-[140px] lg:mb-[110px] md:mb-[60px] lg:mt-0 md:mt-[40px] mt-5 mb-8">
            <div className='container mx-auto xl:max-w-[1164px] px-3'>
                <div data-aos="zoom-in" className="bg-[url('./assets/images/webp/bg-touch.webp')] bg-cover bg-center bg-no-repeat rounded-[24px] border border-solid border-[#FFFFFF29] lg:py-[64px] py-8 flex items-center justify-center flex-col md:px-0 sm:px-11 px-6">
                    <h2 className='sm:text-[48px] text-[33px] font-normal leading-[120%] text-white text-center mb-[10px]'>Get into  <span className='text-[#BAFF00]'>touch</span></h2>
                    <p className='text-[16px] font-normal leading-[150%] text-white opacity-80 text-center'>Defend your business against online threats while leveraging our IT security expertise and <span className='md:block'>experience for comprehensive protection and peace of mind.</span></p>
                    <div className='max-w-[518px] w-full'>
                        <form onSubmit={handleSubmit} className='flex w-full mt-8 border border-solid border-[#BAFF0066] rounded-[50px]'>
                            <input type="email"
                                id="email"
                                name="email"
                                value={email}
                                required
                                onChange={handleChange} placeholder='Enter your email address' className='w-full bg-transparent text-white text-[16px] p-4 font-normal leading-[150%] outline-none opacity-60' />
                            <button type='submit' className='sm:px-[27px] px-[24px] sm:py-[14px] py-[12px] rounded-[100px] bg-[#BAFF00] whitespace-nowrap font-medium text-[16px] leading-[130%] text-[#111111] transition-all duration-300 ease-linear hover:shadow-[0_2px_20px_0_#BAFF00] border-[2px] border-solid border-[#bbff0093] m-[1.7px]'>Sign up</button></form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Touch