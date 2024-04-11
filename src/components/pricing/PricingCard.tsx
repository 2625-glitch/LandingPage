import React from "react";

import ParagraphItem from "./ParagraphItem";
import { Button } from "@mui/material";

const PricingCard = ({ service, index, switchState }) => {
  const { role, description, bandwidth, connections, ram, access, user, data } =
    service;
  return (
    <div
      key={index}
      className=" rounded-md shadow cursor-pointer hover:shadow-lg transition-all duration-300 max-lg:w-auto  m-[10px] border"
      style={{ height: "450px" }}
    >
      <div
        className={`flex flex-col items-center justify-center bg-[#F9F9F9]  rounded-t-lg p-2 ${
          index === 1 && "bg-indigo-500 text-white"
        }`}
      >
        <h3 className="text-base font-medium">{role}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col gap-5 items-center justify-center p-4 border-t ">
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
              backgroundColor: "#FE6D01",
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
