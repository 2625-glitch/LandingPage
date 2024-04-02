import React from "react";
import Navbar from "./Navbar";
import Works from "./Works/Works";
import Services from "./Services/Services";
import Pricing from "./Pricing";
import Contact from "./Contact/Contact";
import CustomerServices from "./CustomerServices/CustomerServices";
import StaticContent from "./StaticComponent/StaticContent";
const Home = () => {
  return (
    <div id="home">
      <Navbar />
      <StaticContent />
      <Works />
      <CustomerServices />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
