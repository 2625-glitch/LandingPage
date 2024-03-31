import React from "react";
import CustomerReviewCard from "./CustomerReviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Works/responsiven";
import { reviews } from "./reviews";

const CustomerServices = () => {
  const children = reviews.map((review) => <CustomerReviewCard {...review} />);
  return (
    <div
      style={{
        paddingLeft: "100px",
        paddingRight: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      <div className="md:px-16 py-8">
        <h2 className="text-2xl font-bold mb-4">What our customers says</h2>
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
export default CustomerServices;
