import React from 'react';
import {NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav>
                <div>

                </div>
                <div>
                    <ul>
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