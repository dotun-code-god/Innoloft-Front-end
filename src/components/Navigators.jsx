import React from 'react'
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from 'react-icons/bi'
import { SlArrowRight } from 'react-icons/sl'

function Navigators({ product, config, edit }) {
  return (
    <div className="flex justify-between items-center">
      {edit ? (
        <span className='font-bold'>{product?.name}</span>
      ) : (
        <div className="flex items-center gap-3">
          <NavLink to={'/'}>
            <BiHomeAlt2 className="text-xl" />
          </NavLink>
          <SlArrowRight className="text-[0.5rem]" />
          <span className="text-sm">Product</span>
          <SlArrowRight className="text-[0.5rem]" />
          <span className="text-sm font-semibold">{product?.name}</span>
        </div>
      )}
      <div>
        <NavLink to={edit ? '/product' : '/product/edit'} className={`text-white px-3 py-1 rounded-md text-sm`} style={{ backgroundColor: `${config?.mainColor}`}}>{edit ? 'View Offer' : 'Edit'}</NavLink>
      </div>
    </div>
  )
}

export default Navigators