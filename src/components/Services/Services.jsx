/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ServiceCard from "./ServiceCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Works/responsiven";
import { Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const services = [
  {
    title: "Computer Administration",
    desc: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.",
    img: "",
  },
  {
    title: "Database Management",
    desc: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.",
    img: "https://i.imgur.com/pwpWaWu.jpg",
  },
  {
    title: "Postgress Migrations",
    desc: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.",
    img: "https://i.imgur.com/pwpWaWu.jpg",
  },
  {
    title: "Opensource code writing",
    desc: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.",
    img: "https://i.imgur.com/pwpWaWu.jpg",
  },
  {
    title: "Database Administration",
    desc: "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.",
    img: "https://i.imgur.com/pwpWaWu.jpg",
  },
];

const Services = () => {
  const children = services.map((service) => <ServiceCard {...service} />);
  return (
    <div
      id="service"
      style={{        backgroundColor: "#f7f7f7"}}
    >
      <div style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "80px",
        paddingBottom: '20px'
      }}>
      <div className="md:px-16 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde
          inventore molestias ab adipisci eius nisi placeat at.
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

      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        transitionDuration={1000}
        dotListClass="custom-dot-list-style"
        arrows={true}

      >
        {children}
      </Carousel>
      </div>
      <div className="mt-20"  style={{backgroundColor:'#2B303B'}}>
        <div className="pt-20 pb-20 flex justify-start items-center" style={{ paddingLeft: '10rem' }}> 
          <div className=" "> 
            <h1 className="text-white  text-2xl font-bold">Dont miss the best management tool of the world</h1>
            <p className="text-white text-s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam, illum et quis officiis beatae.</p>
          </div>
          <div className="flex items-start" style={{ marginLeft: '14rem' }}>
          <Button size="large" variant="contained" style={{ backgroundColor: '#FF9103'  }}><span className="text-black text-transform-none lowercase">Start 14 days trial</span></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
