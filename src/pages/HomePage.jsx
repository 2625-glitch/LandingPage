import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
import landingIntoImage from '../assets/elements-landing2/landing-intro.png';
import blackBackGroundImage from '../assets/elements-landing2/black-background.jpeg';
const HomePage = () => {
  return (
    <div className="mb-12">
      <div
        className="px-0 lg:px-14 max-w-screen-2xl mx-auto  py-16 h-[800px]"
        style={{ backgroundSize: 'auto', backgroundColor: '#252730' }}
      >
        <div className="text-center mt-16">
          <p className="text-2xl mb-6" style={{ color: '#FF9103' }}>
            Build More; Sell More;
          </p>
          <p className="text-5xl mb-6 text-white font-semibold">
            Marketing Automation Redefined
          </p>
          <p className="text-base mb-6 text-white max-w-[610px] ml-auto mr-auto font-normal">
            The most poerfull marketing automation platform you have ever used.
            No hidden charge, pay as you use!
          </p>
          <div>
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: '#FFFFFF',
                color: 'black',
                textTransform: 'none',
              }}
            >
              <span>
                <span className="mr-4">
                  <FlightTakeoffIcon />
                </span>
                <span style={{ fontWeight: 'bold' }}>Start 7 day trail</span>
              </span>
            </Button>
          </div>
        </div>

        <div className="relative max-w-[780px] mx-auto mt-14">
          <img
            src={landingIntoImage}
            alt="Landing Image"
            className="absolute z-10 rounded-lg mt-6 shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
