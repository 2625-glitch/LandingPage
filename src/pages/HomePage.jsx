import React from 'react';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Button from '@mui/material/Button';
import landingIntoImage from '../assets/elements-landing2/landing-intro.png';
import blackBackGroundImage from '../assets/elements-landing2/black-background.jpeg';
const HomePage = () => {
  return (
    <div>
      <div
        className="mx-auto  py-16 h-auto"
        style={{ backgroundSize: 'auto', backgroundColor: '#252730' }}
      >
        <div className="text-center mt-16">
          <p className="text-2xl mb-8" style={{ color: '#FF9103' }}>
            Build More; Sell More;
          </p>
          <p className="text-5xl mb-6 text-white font-semibold">
            Marketing Automation Redefined
          </p>
          <p className="text-base mb-6 text-white max-w-[610px] ml-auto mr-auto font-normal text-sm">
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
                marginBottom: '4',
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
        <div className="relative max-w-[780px] mx-auto flex justify-center items-center lg:top-[90px] top-[90px] p-3">
          <img
            src={landingIntoImage}
            alt="Landing Image"
            className="z-10 rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
