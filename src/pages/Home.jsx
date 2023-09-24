import React from 'react';
import Banner from '../components/Header/Banner';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../components/DonationCard';

const Home = ({totalDonations, handleTotalDonations}) => {
    const donations = useLoaderData();
    console.log(donations)
    return (
        <div className='mb-28'>
            <Banner></Banner>
            <div className='max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
                {
                    donations.map(donation => <DonationCard key={donation.id} donation={donation}  totalDonations={totalDonations} handleTotalDonations={handleTotalDonations}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;