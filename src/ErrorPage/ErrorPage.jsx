import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/')
    }
    return (
        <div className='h-[90vh] flex flex-col justify-center items-center gap-10'>
            <h1 className='text-6xl font-extrabold text-teal-700'>Oops!</h1>
            <h2 className='text-6xl text-black font-black'>404</h2>
            <p className='font-semibold'>The page you are looking for does not exist.</p>
            <button onClick={handleClick} className='bg-teal-700 text-white font-bold px-4 py-2 rounded-full'>Go to Homepage</button>
        </div>
    );
};

export default ErrorPage;