import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { TotalContext } from '../mainLayout/MainLayout';

const DonationItemDetails = () => {
    const [total, setTotal] = useContext(TotalContext);
  
    const donations = useLoaderData();
    const {id} = useParams();
    const donationItem = donations.find(donation => donation.id === id)
    const {picture, title, text_color, price, description} = donationItem;
    const handleSelect = () =>{
        // const selectedItems = [...total];
        // if (selectedItems.length === 0){
        //     const newItems = [];
        //     newItems.push(donationItem);
        //     setTotal(newItems)
        // }
        // else{
        //   const exists = selectedItems.find(item => item.id === id);
        //     if(exists){
        //         toast('You have already made the donation');
        //         return; 
        //     }
        //     else{
        //     const newItems = [...selectedItems, donationItem];
        //     setTotal(newItems)
        //     }
        // }

        const selectedItems = JSON.parse(localStorage.getItem('donation-saved'));
        if(!selectedItems){
            const newItems = [];
            newItems.push(donationItem);
            localStorage.setItem('donation-saved', JSON.stringify(newItems));
            setTotal(newItems)
        }
        else{
            const exists = selectedItems.find(item => item.id === id);
            if(exists){
                toast('You have already made the donation');
                return; 
            }
            else{
            const newItems = [...selectedItems, donationItem];
            localStorage.setItem('donation-saved', JSON.stringify(newItems));
            setTotal(newItems)
            }
         
        }
        toast('You have successfully made the donation');
    }
    console.log(total)
    return (
        <div className='max-w-[1320px] mx-auto max-h-[700px]'>
            <img className='w-full max-h-[700px] object-cover' src={picture} alt="" />
            <div className='p-5 md:p-9 relative -h-[80px] -top-[80px] md:h-[130px] md:-top-[130px]' style={{background: 'rgba(11, 11, 11, 0.50)'}} >
                <button onClick={handleSelect} style={{background: text_color}} className='text-white font-semibold md:text-xl px-6 md:py-4 py-2 rounded-md'>Donate ${price}</button>
                
            </div>
            <div className='mx-4 lg:mx-0 relative -top-20 pb-20'>
                <h2 className='text-[40px] font-bold mb-6'>{title}</h2>
                <p className='opacity-70 text-justify'>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationItemDetails;