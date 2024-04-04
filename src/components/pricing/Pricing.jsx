/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import PricingCard from './PricingCard';

const Pricing = () => {
  const [switchState, setSwitchState] = useState(false);

  const handleSwitchChange = () => {
    setSwitchState(!switchState);
  };

  const services = [
    {
      role: 'Devoloper',
      description: 'For New Developer',
      price: 'Free',
      bandwidth: {
        info: '10 GB of bandwidth',
        isActive: true,
      },
      connections: {
        info: 'Max 50 connections',
        isActive: true,
      },
      ram: {
        info: '512MB RAM',
        isActive: true,
      },
      access: {
        info: 'Unlimited Access',
        isActive: false,
      },
      user: {
        info: 'Unlimited User',
        isActive: false,
      },
      data: {
        info: 'Data Analytics',
        isActive: false,
      },
    },
    {
      role: 'Starter',
      description: 'For Professional Developer',
      price: '30',
      bandwidth: {
        info: '10 GB of bandwidth',
        isActive: true,
      },
      connections: {
        info: 'Max 50 connections',
        isActive: true,
      },
      ram: {
        info: '512MB RAM',
        isActive: true,
      },
      access: {
        info: 'Unlimited Access',
        isActive: true,
      },
      user: {
        info: 'Unlimited User',
        isActive: false,
      },
      data: {
        info: 'Data Analytics',
        isActive: false,
      },
    },
    {
      role: 'Business',
      description: 'For Small Business',
      price: '60',
      bandwidth: {
        info: '10 GB of bandwidth',
        isActive: true,
      },
      connections: {
        info: 'Max 50 connections',
        isActive: true,
      },
      ram: {
        info: '512MB RAM',
        isActive: true,
      },
      access: {
        info: 'Unlimited Access',
        isActive: true,
      },
      user: {
        info: 'Unlimited User',
        isActive: true,
      },
      data: {
        info: 'Data Analytics',
        isActive: false,
      },
    },
    {
      role: 'Enterprise',
      description: 'For Large Companies',
      price: '160',
      bandwidth: {
        info: '10 GB of bandwidth',
        isActive: true,
      },
      connections: {
        info: 'Max 50 connections',
        isActive: true,
      },
      ram: {
        info: '512MB RAM',
        isActive: true,
      },
      access: {
        info: 'Unlimited Access',
        isActive: false,
      },
      user: {
        info: 'Unlimited User',
        isActive: false,
      },
      data: {
        info: 'Data Analytics',
        isActive: false,
      },
    },
  ];
  return (
    <div id="pricing">
      <div className="md:px-28 px-5 py-16 max-w-screen-2xl mx-auto gap-2">
        <h2 className="text-2xl font-bold mb-4">Our Pricing</h2>
        <div className="flex items-center justify-start ml-[-12px]">
          <Switch checked={switchState} onChange={handleSwitchChange} />
          <p> Get up to 10% discount annually</p>
        </div>
        <div className="grid max-md:grid-cols-1 max-sm:grid-cols-1 max-lg:grid-cols-2  max-xl:grid-cols-3 grid-cols-4">
          {services.map((service, index) => (
            <PricingCard
              key={index}
              service={service}
              index={index}
              switchState={switchState}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
