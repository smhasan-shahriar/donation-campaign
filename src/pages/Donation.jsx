import { useContext, useEffect, useState } from 'react';
import SelectedDonationCard from '../components/SelectedDonationCard';
import { TotalContext } from '../mainLayout/MainLayout';

const Donation = () => {
    const [displayAll, setDisplayAll] = useState(false);
    const [total, setTotal] = useContext(TotalContext);
    
    useEffect(()=> {
        const newDonations = JSON.parse(localStorage.getItem('donation-saved'));
        if (!newDonations){
            setTotal([])
        }
        else{
            setTotal(newDonations);
        }
        
    }, [])
  

    return (
        <div className="max-w-[1320px] mx-auto">
            {
                total.length === 0 ? <div className='h-[70vh] flex justify-center items-center font-bold text-2xl'>No Donations Yet</div>:""
            }
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4">
                {   
                    !displayAll ? total.slice(0,4).map(donation => <SelectedDonationCard key={donation.id} donation={donation}></SelectedDonationCard>):
                    total.map(donation => <SelectedDonationCard key={donation.id} donation={donation}></SelectedDonationCard>)
                  
                }
            </div>
            {
                total.length > 4 && !displayAll? <div className="text-center my-10">
                    <button onClick={()=> setDisplayAll(true)} className="bg-[#009444] rounded-lg text-white px-7 py-3">See All</button>
                </div>:<div></div>
            }
        </div>
    );
};

export default Donation;