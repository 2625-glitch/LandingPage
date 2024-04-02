import React from "react";
import Navbar from "./Navbar";
import Works from "./Works/Works";
import Services from "./Services/Services";
import Pricing from "./Pricing";
import Contact from "./Contact/Contact";
import CustomerServices from "./CustomerServices/CustomerServices";
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
