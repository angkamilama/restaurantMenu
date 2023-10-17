import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function RootLayout() {
    return (
        <div className='box-border'>
            <nav className='flex text-gray-800 font-semibold w-full h-50 justify-evenly items-center p-3 bg-blue-400/50'>
                <NavLink to='/' className='hover:text-lg hover:text-yellow-800'>HOME</NavLink>
                <NavLink to="/About" className='hover:text-lg hover:text-yellow-800'>ABOUT</NavLink>
                <NavLink to="/Search" className='hover:text-lg hover:text-yellow-800'>SEARCHFOOD</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default RootLayout