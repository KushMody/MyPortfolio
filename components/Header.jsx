import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className="fixed top-0 left-0 w-[100%]
                md:h-[10%] 
                flex md:flex-row flex-col 
                md:justify-around justify-center
                items-center z-50 bg-white 
                p-4 md:p-0">

                <div className="flex items-center gap-2 text-gray-500">
                    <div className="h-4 w-4 bg-blue-600"></div>
                    <a href="/" className="font-bold text-xl text-black">Kush Mody</a> /
                    <a href="/">WEB DEVELOPER</a>
                </div>

                <ul className="flex list-none gap-5 
                md:mt-0 mt-4 
                flex-wrap justify-center">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>
                            ABOUT ME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume" className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>
                            RESUME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "text-blue-400" : "text-black"}>
                            PROJECTS
                        </NavLink>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default Header