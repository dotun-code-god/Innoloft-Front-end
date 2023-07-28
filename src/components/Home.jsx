import { useState } from "react";

function Home({config}) {
    return (
        <div className={`flex flex-col items-center justify-center text-[${config && config.mainColor}]`}>
            <h1 className="sm:text-5xl text-3xl font-bold">Welcome to Innoloft...</h1>
            <p className="sm:text-xl mt-1 text-center">Where we make Coding as easy as PowerPoint</p>
        </div>
    )
}

export default Home 