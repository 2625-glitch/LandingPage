/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import CustomerReviewCard from './CustomerReviewCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { reviews } from './reviews';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commonSliderSettings } from '../sliderSettings';
const CustomerServices = () => {
  const children = reviews.map((review) => <CustomerReviewCard {...review} />);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute z-10  flex items-center  justify-center cursor-pointer rounded-full  w-12 h-12  slick-arrow slick-prev text-black"
        onClick={onClick}
      ></div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="slick-arrow  absolute  flex items-center  justify-center cursor-pointer  w-12 h-12  rounded-full slick-next text-black"
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
    <div
      className="px-4 md:px-28 py-8"
      style={{
        paddingTop: '50px',
        paddingBottom: '50px',
      }}
    >
      <div className="md:px-2 py-8">
        <h2 className="text-2xl font-bold mb-4">What our customers says</h2>
        <p className="text-gray-600 font-light text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde
          inventore molestias ab adipisci eius nisi placeat at.
        </p>
      </div>
      <div>
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  );
};
export default CustomerServices;
