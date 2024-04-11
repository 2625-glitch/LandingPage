/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from "react";
import WorkCard from "./WorkCard";
import { services } from "./serivces";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { commonSliderSettings } from "../sliderSettings";
import "../sliderColor.css";
const Works = () => {
  const children = services.map((service) => {
    return (
      <WorkCard
        id={service.id}
        title={service.title}
        image={service.image}
        desc={service.desc}
      />
    );
  });
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-10  flex items-center  justify-center cursor-pointer rounded-full  w-12 h-12 bg-white slick-arrow slick-prev text-black"
        style={{ color: "red" }}
        onClick={onClick}
      ></div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute  flex items-center  justify-center cursor-pointer  w-12 h-12 bg-white rounded-full slick-next text-black slick-arrow"
        onClick={onClick}
      ></div>
    );
  };

  var settings = {
    ...commonSliderSettings,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div id="works" className="px-4 md:px-16 py-8">
      <div className="md:px-16 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Works</h2>
        <p className="text-sm text-gray-600 font-light">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde
          inventore molestias ab adipisci eius nisi placeat at.
        </p>
      </div>
      <div className="slider-container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};
export default Works;
