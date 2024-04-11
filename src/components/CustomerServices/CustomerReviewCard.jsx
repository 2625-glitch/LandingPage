/* eslint-disable react/prop-types */
import { Avatar } from "@mui/material";
const CustomerReviewCard = ({ desc, avatar, name, designation }) => {
  return (
    <div
      className=" h-[300px] rounded-md shadowcursor-pointer
    hover:shadow-xl hover:shadow-gray transition-all duration-300 bg-white shadow-lg border p-[30px] m-[10px]"
    >
      <div
        style={{ overflow: "scroll" }}
        className="flex items-center h-[200px]"
      >
        <h5>{desc}</h5>
      </div>
      <div className="flex flex-row justify-space ">
        <div>
          <Avatar alt={name} src="../../assets/sq-9.jpg" />
        </div>
        <div className="px-4">
          <h4 className="font-bold">{name}</h4>
          <h5 className="font-medium">{designation}</h5>
        </div>
      </div>
    </div>
  );
};
export default CustomerReviewCard;
