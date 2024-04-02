import React from "react";

import ParagraphItem from "./ParagraphItem";
import { Button } from "@mui/material";

const PricingCard = ({ service, index, switchState }) => {
  const { role, description, bandwidth, connections, ram, access, user, data } =
    service;
  return (
    <div
      key={index}
      className="col-span-1 hover:shadow-xl  transition-all duration-300 bg-white shadow-md"
    >
      <div
        className={`flex flex-col items-center justify-center bg-[#F9F9F9] p-3 border-x border-t rounded-t-lg ${
          index === 1 && "bg-[#3F50B5] text-white"
        }`}
      >
        <h3 className="text-base font-medium">{role}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center p-4 border rounded-b-lg">
        <h2 className="text-2xl font-bold">
          {service.price === "Free"
            ? service.price
            : !switchState
            ? `$ ${service.price} /Mo`
            : `$ ${service.price * 12 - service.price * 12 * 0.1} /Yr`}
        </h2>
        <ParagraphItem info={bandwidth.info} isActive={bandwidth.isActive} />
        <ParagraphItem
          info={connections.info}
          isActive={connections.isActive}
        />
        <ParagraphItem info={ram.info} isActive={ram.isActive} />
        <ParagraphItem info={access.info} isActive={access.isActive} />
        <ParagraphItem info={user.info} isActive={user.isActive} />
        <ParagraphItem info={data.info} isActive={data.isActive} />
        <Button
          variant="contained"
          disableRipple
          sx={{
            backgroundColor: "#FF9100",
            color: "black",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FE6D01", // New background color on hover
            },
          }}
        >
          Choose
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
