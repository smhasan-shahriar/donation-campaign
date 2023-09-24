import React from 'react';
import {NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='max-w-[1600px] mx-auto py-[50px] lg:px-[140px] px-4 relative z-10'>
            <nav className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div>
                    <img src="logo.png" alt="" />
                </div>
                <div>
                    <ul className='flex flex-col md:flex-row gap-12 text-lg text-center'>
                        <li>
                            <NavLink to= "/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/donation">Donation</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;