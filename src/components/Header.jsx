import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsChatDots } from 'react-icons/bs'
import { SlArrowDown } from 'react-icons/sl'
import { IoIosNotificationsOutline } from 'react-icons/io'


function Header({ baseURL, userPicture, config}) {
    return (
        <>
            <div className={`flex items-center justify-between sm:px-[5%] px-[3%] py-3 shadow-[0_0_5px_0_${config && config.mainColor}]`}>
                {/* #3ab396 */}
                <NavLink to={'/'}>
                    <img src='https://img.innoloft.com/logo.svg' alt="" className='lg:w-44 w-32' />
                </NavLink>
                <div className='md:flex items-center hidden'>
                    <input type="text" className={`placeholder:font-medium text-sm border-[0.1rem] focus:outline-none focus:border-[${config && config.mainColor}] lg:w-[25rem] md:w-[15rem] pl-3 pr-10 py-2 rounded-xl`} placeholder='Enter interests, keyword, company name, etc.' />
                    <BiSearchAlt2 className={`relative right-8 text-xl text-[${config && config.mainColor}]`} />
                </div>
                <div className={`flex items-center gap-4 text-[${config && config.mainColor}]`}>
                    <BsChatDots className='text-xl' />
                    <div className='flex items-center gap-2'>
                        <span>EN</span>
                        <SlArrowDown />
                    </div>
                    <IoIosNotificationsOutline className='text-2xl' />
                    <div className='flex items-center gap-1'>
                        <img src={userPicture} className='w-8 h-8 rounded-full' alt="" />
                        <SlArrowDown />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
