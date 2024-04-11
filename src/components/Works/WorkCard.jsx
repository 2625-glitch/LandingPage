/* eslint-disable react/prop-types */
import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";

const WorkCard = ({ id, image, title, desc }) => {
  return (
    <div className="rounded-md shadow cursor-pointer  hover:shadow-md hover:shadow-gray-600 transition-all duration-300 bg-gray-100 sm:w-[300px] h-auto">
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt="Image not found"
          className="w-full rounded-md aspect-[4/3]"
        />
      </div>
      <div className="px-8 py-4 h-auto">
        <h4 className="text-md font-bold mb-2 ">{title}</h4>

        <p className="text-sm">{desc}</p>
      </div>
      <div className="flex flex-row">
        <div className="px-2 py-2 cursor-pointer flex items-center justify-center hover:bg-gray-400 rounded-full ">
          <LinkIcon />
        </div>
        <div className="px-2 py-2 flex items-center justify-center cursor-pointer  hover:bg-gray-400 rounded-full">
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
