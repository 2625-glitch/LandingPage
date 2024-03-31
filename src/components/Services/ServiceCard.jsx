import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import "./service.css";
const ServiceCard = ({ title, desc }) => {
  return (
    <div
      className="card md:w-[300px] h-full mx-auto rounded-md shadowcursor-pointer
  hover:shadow-2xl hover:shadow-black transition-all duration-300 bg-white shadow-lg"
    >
      <div className="flex items-center justify-center p-5">
        <SettingsSuggestIcon style={{ height: "100px", width: "100px" }} />,
      </div>
      <div className="flex flex-col p-4">
        <div className="py-2">
          <h1 className="text-xl font-extralight">{title}</h1>
        </div>
        <div
          style={{
            height: "125px",
            overflow: "hidden",
          }}
        >
          <p className="">{desc}</p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
