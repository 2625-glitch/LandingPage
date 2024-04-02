import React from 'react'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
import landingIntoImage from '../assets/elements-landing2/landing-intro.png';
import blackBackGroundImage from   '../assets/elements-landing2/black-background.jpeg';
const HomePage = () => {
  return (
    <div className="mt-20" >
      <div className="px-0 lg:px-14 max-w-screen-2xl mx-auto  py-16"  style={{backgroundImage: `url(${blackBackGroundImage}`,backgroundSize: 'auto'}}>
        <div className='text-center'>
        <p className="text-2xl mb-6" style={{ color: '#FF9103' }}>
          Build More; Sell More;
        </p>
        <p className="text-5xl mb-6 text-white font-semibold">
        Marketing Automation Redefined
        </p>
        <p className="text-base mb-6 text-white max-w-[610px] ml-auto mr-auto font-normal">
        The most poerfull marketing automation platform you have ever used. No hidden charge, pay as you use!
        </p>
        <div>
            <Button variant="contained" size='large' style={{backgroundColor: '#FFFFFF' , color:'black', textTransform: 'none'}}>
                <span>
                    <span className='mr-4'><FlightTakeoffIcon/></span>
                    <span style={{ fontWeight: 'bold' }}>Start 7 day trail</span>
                </span>           
             </Button>
        </div>
        
        </div>
        <div className='max-w-[780px] mx-auto mt-12'>
        <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  opacity-50 rounded-md shadow-lg"></div>
            <img src={landingIntoImage} alt="Landing Image" className='relative z-10 rounded-md mt-6' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
