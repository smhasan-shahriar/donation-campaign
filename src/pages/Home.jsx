import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import DonationCard from '../components/DonationCard';

const Home = () => {
    const donations = useLoaderData();
    const [displayDonations, setDisplayDonation] = useState([]);
    const [filter, setFilter] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(filter)
        
        if(filter === "Food" || filter === "Health" || filter === "Education" || filter === "Clothing"){
            const filteredDonation = donations.filter(donation => donation.category === filter);
            setDisplayDonation(filteredDonation)
        }
        else{
            toast('Please enter proper category name. i.e. Food, Health, Education, Clothing');
            e.target.search.value =''
            setDisplayDonation(donations);
        }
       
    }
    useEffect(()=> {
        setDisplayDonation(donations)
    }, [donations])
    const handleChange = e => {
        setFilter(e.target.value);
    }
       const bgStyle = {
        minHeight:"100%",
        background:"linear-gradient(0deg, rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(banner-img.png)",
        backgroundSize:"cover"
    }
    
    return (
        <div className='mb-28'>
            <ToastContainer />
            <div>
            <div className='h-[700px] md:h-[600px] flex flex-col justify-center items-center gap-10 relative max-w-[1600px] mx-auto md:-top-[172px] -top-[250px] z-0' style={bgStyle}>
            <h1 className='text-4xl md:text-5xl font-bold opacity-100 text-center md:mt-10 mt-28'>I Grow By Helping People In Need</h1>
            <div className='h-[50px] border border-[#DEDEDE] rounded-lg'>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} name="search" className='text-sm p-4 md:w-[360px] w-[220px]' type="text" placeholder='Search here...' />
                    <input type="submit" className='w-[110px] h-[50px] bg-[#FF444A] text-white rounded-r-lg font-semibold' value="Search"></input>
                </form>
            </div>
        </div>
            </div>
            <div className='max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:max-xl:gap-2 justify-items-center relative -top-[150px] md:-top-[50px] lg:static'>
                {
                    displayDonations.map(donation => <DonationCard key={donation.id} donation={donation} handleSubmit={handleSubmit } handleChange={handleChange}></DonationCard>)
                }
            </div>
        </div>
    );
};

export default Home;