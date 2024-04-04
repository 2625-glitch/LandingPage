/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ServiceCard from './ServiceCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { commonSliderSettings } from '../sliderSettings';
const services = [
  {
    title: 'Computer Administration',
    desc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.',
    img: '',
  },
  {
    title: 'Database Management',
    desc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.',
    img: 'https://i.imgur.com/pwpWaWu.jpg',
  },
  {
    title: 'Postgress Migrations',
    desc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.',
    img: 'https://i.imgur.com/pwpWaWu.jpg',
  },
  {
    title: 'Opensource code writing',
    desc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.',
    img: 'https://i.imgur.com/pwpWaWu.jpg',
  },
  {
    title: 'Database Administration',
    desc: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.',
    img: 'https://i.imgur.com/pwpWaWu.jpg',
  },
];

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
const Services = () => {
  const children = services.map((service) => <ServiceCard {...service} />);
  return (
    <div id="service" style={{ backgroundColor: '#f7f7f7' }}>
      <div
        className="px-4 md:px-16 py-8"
        style={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <div className="md:px-16 py-8">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            unde inventore molestias ab adipisci eius nisi placeat at.
          </p>
        </div>
        <style>
          {`
          .react-multiple-carousel__arrow--left,
          .react-multiple-carousel__arrow--right {
            color: white;
            background-color:  #f2f2f2 ;
          }
        `}
        </style>

        <div className="slider-container p-[3rem]">
          <Slider {...settings}>{children}</Slider>
        </div>
      </div>
      <div
        className="md:px-28 px-4  max-w-screen-2xl mx-auto "
        style={{ backgroundColor: '#2B303B' }}
      >
        <div className="pt-20 pb-20 px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-start items-center">
          <div className="mb-6 lg:mb-0">
            <h1 className="text-white text-2xl lg:text-3xl font-bold mb-4">
              Dont miss the best management tool of the world
            </h1>
            <p className="text-white text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam,
              illum et quis officiis beatae.
            </p>
          </div>
          <div
            className="flex items-start lg:items-center"
            style={{ marginLeft: '12rem' }}
          >
            <Button
              size="large"
              variant="contained"
              className="text-black"
              style={{ backgroundColor: '#FF9103' }}
            >
              <span className="text-white lowercase">Start 14 days trial</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
