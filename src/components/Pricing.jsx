import React from 'react'

const Pricing = () => {
    const services = [
        {id:1 , title: "Custom System Integration1" , desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipi." , image:"icon1"},
        {id:2 , title: "Custom System Integration2" , desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipi." , image:"icon2"},
        {id:3 , title: "Custom System Integration3" , desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipi." , image:"icon3"}
    ]
  return (
    <div className='md:px-28 px-6 py-16 max-w-screen-2xl mx-auto' id='pricing'>
        <div>
            <h2 className='text-2xl font-bold mb-4'>Our Pricing</h2>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.
            </p>
        </div>
        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  md:w-11/12 mx-auto gap-12'>
          {
            services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadowcursor-pointer hover:-translate-y-5
            hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full bg-gray-100'> 
            <div>
              <div className='h-14 w-14 mx-auto rounted-t1-3xl rounded-br-3xl mb-4'>{service.image}</div>
              <h4 className='text-2xl font-semi-bold mb-2 px-2'>{service.title}</h4>
              <p className='text-sm'>{service.desc}</p>
            </div>
            </div>)
          }
        </div>
    </div>
  );
};

export default Pricing;
