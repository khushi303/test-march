import React from 'react'

const CommonBtn = (props) => {
    return (
        <div>
            <button className='px-[28px] py-[14px] rounded-[100px] bg-[#BAFF00] border-0 font-medium text-[16px] leading-[150%]'>{props.btnname}</button>
        </div>
    )
}

export default CommonBtn;