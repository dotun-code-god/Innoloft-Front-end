import { useState } from "react";
import { NavLink } from "react-router-dom";

function Home({ config }) {
    return (
        <div className={`flex flex-col items-center justify-center h-[75vh]`} style={{ color: `${config?.mainColor}`}}>
            <h1 className="sm:text-5xl text-3xl font-bold">Welcome to Innoloft...</h1>
            <p className="sm:text-xl mt-1 text-center">We make <strong>Coding</strong> as easy as <strong>PowerPoint</strong></p>
            <NavLink to={'/product'} className="mt-3 rounded-3xl text-white px-5 py-3" style={{ backgroundColor: `${config?.mainColor}`}}>See Products</NavLink>
        </div>
    )
}

export default Home 