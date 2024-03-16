import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className='sm:px-[27px] px-[24px] sm:py-[14px] py-[12px] rounded-[100px] bg-[#BAFF00]  font-medium text-[16px] leading-[150%] text-[#111111] transition-all duration-300 ease-linear hover:shadow-[0_2px_20px_0_#BAFF00] border-[2px] border-solid border-[#bbff0093]'>{props.btnname}</button>
        </div>
    )
}

export default CommonBtn;