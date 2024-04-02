import React from "react";
import Navbar from "./Navbar";
import Works from "./works/Works";
import Services from "./services/Services";
import Pricing from "./pricing/Pricing";
import Contact from "./contact/Contact";
import CustomerServices from "./customerServices/CustomerServices";
import HomePage from "../pages/HomePage";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <HomePage/>
      <Works />
      <CustomerServices />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
