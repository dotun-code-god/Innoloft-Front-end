import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiShoppingCart } from 'react-icons/fi'

function Navigation({user, company}) {
    return (
        <>
            <div>
                <div className="flex items-center gap-2">
                    <img src={user && user.profilePicture} className="w-14 h-14 rounded-full" alt="" />
                    <div>
                        <h1 className="font-bold text-primary_bold leading-5">{user && user.firstName} {user && user.lastName}</h1>
                        <p className="text-primary_regular font-[400] text-sm">{user && company.name}</p>
                    </div>
                </div>
                <div className="mt-8 text-primary_regular">
                    <NavLink to={'/'} className="flex items-center gap-3 cursor-pointer hover:text-primary_bold">
                        <BiHomeAlt2 className="text-2xl" />
                        <h1>Home</h1>
                    </NavLink>
                    <NavLink to={'/product'} className="mt-6 flex items-center gap-3 cursor-pointer hover:text-primary_bold">
                        <FiShoppingCart className="text-2xl" />
                        <h1>Product</h1>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navigation
