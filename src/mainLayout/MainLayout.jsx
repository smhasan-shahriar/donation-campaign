import React, { createContext, useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom'
export const TotalContext = createContext([])
const MainLayout = () => {
    const [total, setTotal] = useState([]);
    
  
    return (
        <div>
            <Header></Header>
            <TotalContext.Provider value={[total, setTotal]}>
                <Outlet></Outlet>
            </TotalContext.Provider>
        </div>
    );
};

export default MainLayout;