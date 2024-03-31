import ServiceCard from "./ServiceCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Works/responsiven";

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
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "50px",
        backgroundColor: "#f7f7f7",
        paddingBottom: "50px",
      }}
    >
      <div className="md:px-16 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Services</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde
          inventore molestias ab adipisci eius nisi placeat at.
        </p>
      </div>
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
  );
};
export default Services;
