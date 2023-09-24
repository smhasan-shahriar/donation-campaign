import React from 'react';

const Banner = () => {
    const bgStyle = {
        minHeight:"100%",
      background:"linear-gradient(0deg, rgba(255,255,255,0.90), rgba(255,255,255,0.90)), url(banner-img.png)",
      backgroundSize:"cover"
    }
    return (
        <div className='h-[600px] flex flex-col justify-center items-center gap-10 relative max-w-[1600px] mx-auto -top-[172px] z-0' style={bgStyle}>
            <h1 className='text-5xl font-bold opacity-100'>I Grow By Helping People In Need</h1>
            <div className='h-[50px] border border-[#DEDEDE] rounded-lg'>
                <input className='text-sm p-4 w-[360px]' type="text" placeholder='Search here...' />
                <button className='w-[110px] h-[50px] bg-[#FF444A] text-white rounded-lg font-semibold'>Search</button>
            </div>
        </div>
    );
};

export default Banner;