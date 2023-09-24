import { ToastContainer, toast } from 'react-toastify';
import { useLoaderData, useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const DonationItemDetails = () => {
    const donations = useLoaderData();
    const {id} = useParams();
    const donationItem = donations.find(donation => donation.id === id)
    console.log(donationItem)
    const {picture, title, text_color, price, description} = donationItem;
    const handleSelect = () =>{
     
        const selectedItems = JSON.parse(localStorage.getItem('donation-saved'));
        if(!selectedItems){
            const newItems = [];
            newItems.push(donationItem);
            localStorage.setItem('donation-saved', JSON.stringify(newItems));
        }
        else{
            const newItems = [...selectedItems, donationItem];
            localStorage.setItem('donation-saved', JSON.stringify(newItems));
        }
        toast('You have successfully made the donation');
    }
    return (
        <div className='max-w-[1320px] mx-auto'>
            <img src={picture} alt="" />
            <div className='p-9 relative -top-[130px]' style={{background: 'rgba(11, 11, 11, 0.50)'}} >
                <button onClick={handleSelect} style={{background: text_color}} className='text-white font-semibold text-xl px-6 py-4 rounded-md'>Donate ${price}</button>
                
            </div>
            <div className='mx-4 lg:mx-0 mb-28 relative -top-20'>
                <h2 className='text-[40px] font-bold mb-6'>{title}</h2>
                <p className='opacity-70 text-justify'>{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default DonationItemDetails;