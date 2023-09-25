import React, { createContext, useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom'
export const TotalContext = createContext([])
const MainLayout = () => {
    const [total, setTotal] = useState([]);
    useEffect(()=>{
        const selectedItems = JSON.parse(localStorage.getItem('donation-saved'));
        if(!selectedItems){
            setTotal([]);
        }
        else
        {
            setTotal(selectedItems)
        }
         
        
    }, [])
  
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