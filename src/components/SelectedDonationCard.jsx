import React from 'react';
import { useNavigate } from 'react-router-dom';

const SelectedDonationCard = ({donation}) => {
    const {id, picture, category, category_bg, card_bg, text_color, title, price} = donation;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/donations/${id}`);
    }
    return (
        <div style={{background: card_bg}} className='flex gap-6 items-center rouded-lg'>
            <img className='w-[190px] h-[170px] md:w-[220px] md:h-[200px] object-cover' src={picture} alt="" />
            <div>
            <button style={{background: category_bg, color: text_color}} className='py-1 px-[10px] rounded-md font-medium text-sm'>{category}</button>
            <h2 className='my-1 md:my-2 md:text-2xl text-lg font-semibold'>{title}</h2>
            <h4 style={{color: text_color}} className='my-1 md:mb-5 font-semibold'>${price}</h4>
            <button onClick={handleDetails} style={{background: text_color}} className='text-white font-semibold md:text-lg px-4 py-2 rounded-md'>View Details</button>
            </div>
        </div>
    );
};

export default SelectedDonationCard;