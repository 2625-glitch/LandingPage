import { Avatar } from "@mui/material";
const CustomerReviewCard = ({ desc, avatar, name, designation }) => {
  return (
    <div
      className="md:w-[300px] h-full mx-auto rounded-md shadowcursor-pointer
    hover:shadow-2xl hover:shadow-black transition-all duration-300 bg-white shadow-lg"
      style={{ height: "300px" }}
    >
      <div
        style={{ height: "200px", overflow: "scroll" }}
        className="flex items-center px-5"
      >
        <h5>{desc}</h5>
      </div>
      <div className="flex flex-row justify-space px-5">
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
