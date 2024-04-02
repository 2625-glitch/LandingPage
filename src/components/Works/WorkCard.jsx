import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import ShareIcon from "@mui/icons-material/Share";

const WorkCard = ({ id, image, title, desc }) => {
  return (
    <div
    className="max-w-xs md:max-w-md lg:max-w-xl mx-auto rounded-md shadow cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-100"
      style={{ height: "500px" }}
    >
      <div>
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt="Image not found"
            className="md:w-[300px] rounded-md"
            style={{ height: "200px" }}
          />
        </div>
        <div className="px-8 py-8" style={{ height: "200px" }}>
          <h4 className="text-2xl font-semi-bold mb-2 ">{title}</h4>

          <p className="text-sm">{desc}</p>
        </div>
        <div className="px-4 flex flex-row " style={{ height: "75px" }}>
          <div
            className="px-2 py-2 cursor-pointer flex items-center justify-center hover:bg-gray-400 rounded-full "
            style={{ height: "50px", width: "50px" }}
          >
            <LinkIcon />
          </div>
          <div
            className="px-2 py-2 flex items-center justify-center cursor-pointer  hover:bg-gray-400 rounded-full"
            style={{ height: "50px", width: "50px" }}
          >
            <ShareIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkCard;
