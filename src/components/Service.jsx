import React from 'react'

const Service = () => {
    const services = [
        {id:1 , title: "Custom System Integration" , desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipi." , image:"icon1"}
    ]
  return (
    <div className='md:px-28 px-6 py-16 max-w-screen-2xl mx-auto'>
        <div>
            <h2 className='text-2xl font-bold mb-4'>Our Services</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
        </div>
    </div>
  );
};

export default Service;
