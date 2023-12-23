import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='flex flex-row mb-5 p-2 h-2/5 bg-white md:flex-col md:justify-center'>
        <NavLink to='/' className={'btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff]'}>Efoy Plus </NavLink>
        <NavLink to='/birhan' className={'btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff]'}>Birhan</NavLink>
        <NavLink to='/euroexim' className={'btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff]'}>Euro Exim</NavLink>
        <NavLink to='/zemen' className={'btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff]'}>Zemen</NavLink>
        <NavLink to='/woldia' className={'btn flex p-1 rounded-md md:flex flex-1 md:text-left md:p-4 h-16 bg-[#ffffff]'}>Woldia</NavLink>
    </nav>
  )
}

export default NavBar