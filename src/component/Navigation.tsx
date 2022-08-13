import React from "react";
import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 items-center text-white">
            <span className="front-bold">React 2022</span>
            <Link to='/' className="ml-2">Products</Link>
            <Link to='/about' className="ml-2">About</Link>

        </nav>
    )
}