import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const {id, picture, title, category, category_bg, card_bg, text_color} = donation;
    const navigate = useNavigate();
    const handleDetails = () => {
        navigate(`/donations/${id}`);
        window.scrollTo({
            top: 0, 
            behavior: 'smooth' 
         });
    }

    return (
        <div onClick={handleDetails} style={{background: card_bg}} className='w-[312px] rounded-lg'>
            <img className='w-full h-[194px] object-cover' src={picture} alt="" />
            <button style={{background: category_bg, color: text_color}} className='mx-4 mt-4 mb-2 py-1 px-[10px] rounded-md font-medium text-sm'>{category}</button>
            <h2 style={{color: text_color}} className='mx-4 mb-4 text-xl font-semibold'>{title}</h2>
        </div>
    );
};

export default DonationCard;