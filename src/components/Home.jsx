import React from "react";
import Navbar from "./Navbar";
import Works from "./Works/Works";
import Services from "./Services/Services";
import Pricing from "./Pricing";
import Contact from "./Contact/Contact";
import CustomerServices from "./CustomerServices/CustomerServices";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen bg-gray-500">
        <p className="text-5xl mb-4 font-semibold text-white">
          Build More; Sell More;
        </p>
      </div>
      <Works />
      <CustomerServices />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
