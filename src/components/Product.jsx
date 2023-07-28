import { useState } from "react";
import ReactPlayer from "react-player";
import { NavLink } from "react-router-dom";
import { BiHomeAlt2 } from 'react-icons/bi'
import { SlArrowRight } from 'react-icons/sl'
import { SiBmcsoftware } from 'react-icons/si'
import { VscLocation } from 'react-icons/vsc'
import Technology from '../assets/icons/inno_dev-4.png'
import Clock from '../assets/icons/inno_clock.png'
import Business from '../assets/icons/inno_strategy.png'
import Investments from '../assets/icons/inno_investor.png'

function Product({config, product, user}) {

    return (
        <div className={`-mt-8 text-[${config && config.mainColor}]`}>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <NavLink to={'/'}>
                        <BiHomeAlt2 className="text-xl" />
                    </NavLink>
                    <SlArrowRight className="text-[0.5rem]" />
                    <span className="text-sm">Product</span>
                    <SlArrowRight className="text-[0.5rem]" />
                    <span className="text-sm font-semibold">{product && product.name}</span>
                </div>
                <div>
                    <button className={`bg-[${config && config.mainColor}] text-white px-3 py-1 rounded-md text-sm`}>Edit</button>
                </div>
            </div>
            <div className="my-3 lg:flex">
                <div className="rounded-md lg:rounded-tr-none rounded-br-none rounded-bl-none lg:rounded-bl-md border-b-0 lg:border-b-[0.1rem] lg:border-r-0 product_container lg:w-[55%]">
                    <div className="relative">
                        <div className={`text-white p-1 absolute top-0 rounded-tl-md text-sm left-0 flex items-center bg-[${config && config.mainColor}]`}>
                            <SiBmcsoftware className="text-3xl p-2" />
                            <span className="pr-1">{product && product.type.name}</span>
                        </div>
                        <div className="flex justify-center">
                            <img src={product && product.picture} alt="Product" className=" h-[20rem]" />
                        </div>
                    </div>
                    <div className="border-t-[0.1rem] border-[#E5E7EB] px-5 py-6">  
                        <h1 className="font-semibold">{product && product.name}</h1>
                        <p className="text-sm text-primary_regular">{product && product.description}</p>
                        {/* <p className="text-sm mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea aspernatur sunt facere repellat placeat aliquid architecto iure omnis, non quos hic molestiae, nulla consectetur commodi fugit impedit est tenetur et!</p> */}
                    </div>
                    
                </div>
                <div className="rounded-md rounded-tl-none lg:rounded-bl-none rounded-tr-none lg:rounded-tr-md border-t-0 lg:border-t-[0.1rem] product_container lg:w-[45%] p-6">
                    <p className="text-sm font-bold">Offered By</p>
                    <img src="https://img.innoloft.com/logo.svg" alt="Innoloft Logo" className="w-40 mt-4" />
                    <div className="mt-4 flex items-center gap-2">
                        <img src={user && user.profilePicture} className="w-12 h-12 rounded-full" alt="" />
                        <div>
                            <h1 className="font-semibold text-primary_bold">{user && user.firstName} {user && user.lastName}</h1>
                            <p className="text-primary_regular font-[400] text-sm">{product && product.company.name}</p>
                        </div>
                    </div>
                    <div className="mt-8 text-sm">
                        <div>
                            <div className="flex">
                                <VscLocation className="text-2xl" />
                                <span>{product && product.company.address.street} {product && product.company.address.house},</span>
                            </div>
                            <p className="ml-6">{product && product.company.address.zipCode} {product && product.company.address.city.name}, {product && product.company.address.country.name}</p>
                        </div>
                        <div className="mt-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2522.775648019116!2d6.0977920759231505!3d50.77973236360116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDQ2JzQ3LjAiTiA2wrAwNicwMS4zIkU!5e0!3m2!1sen!2sng!4v1690554278285!5m2!1sen!2sng" className="border-none w-full h-[20rem]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-5 my-6 product_container">
                <h1 className="font-bold text-sm">Video</h1>
                <div className="flex items-center justify-center mt-3">
                    <ReactPlayer url={product && product.video} />
                </div>
            </div>

            <div className="p-5 my-6 product_container text-sm">
                <h1 className="font-bold">Offer details</h1>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 text-primary_regular mt-4">
                    <div className="flex gap-2">
                        <div>
                            <img src={Technology} alt="" />
                        </div>
                        <div>
                            <h1>Categories</h1>
                            <div className="mt-2 flex flex-wrap items-center gap-1">
                                {product && product.categories.map((category) => (
                                    <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{category.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src={Business} alt="" />
                        </div>
                        <div>
                            <h1>Business Model</h1>
                            <div className="mt-2 flex flex-wrap items-center gap-1">
                                {product && product.businessModels.map(model => (
                                    <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{model.name}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src={Clock} alt="" />
                        </div>
                        <div>
                            <h1>TRL</h1>
                            <div className="mt-2 flex flex-wrap items-center gap-1">
                                <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{product && product.trl.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src={Investments} alt="" />
                        </div>
                        <div>
                            <h1>Costs</h1>
                            <div className="mt-2 flex flex-wrap items-center gap-1">
                                <span className="rounded-3xl px-3 text-xs py-1 bg-[#E5E7EB]">{product && product.investmentEffort}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product; 