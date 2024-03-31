import React from "react";
import WorkCard from "./WorkCard";
import classNames from "classnames";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./responsiven";
import { services } from "./serivces";

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

  return (
    <div
      id="works"
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div className="md:px-16 py-8">
        <h2 className="text-2xl font-bold mb-4">Our Works</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde
          inventore molestias ab adipisci eius nisi placeat at.
        </p>
      </div>
      <div>
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
    </div>
  );
};

export default Works;
