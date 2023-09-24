import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../ErrorPage/ErrorPage';
import MainLayout from '../mainLayout/MainLayout';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import Statistics from '../pages/Statistics';
import DonationItemDetails from '../pages/DonationItemDetails';

const NavigationRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donations/:id",
                element: <DonationItemDetails></DonationItemDetails>,
                loader: ()=> fetch('/donation.json')
            }
        ]
    }
])
export default NavigationRoutes;