/* eslint-disable react/prop-types */
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import './service.css';
const ServiceCard = ({ title, desc }) => {
  return (
    <div
      className="card md:w-[350px] h-full mx-auto rounded-md shadowcursor-pointer
  hover:shadow-xl hover:shadow-gray-600 transition-all duration-300 bg-white shadow-lg"
    >
      <div className="flex items-center justify-center p-5">
        <SettingsSuggestIcon style={{ height: '60px', width: '70px' }} />,
      </div>
      <div className="flex flex-col p-4">
        <div className="py-2">
          <h1 className="text-xl ">{title}</h1>
        </div>
        <div className="mb-8">
          <p className="text-base font-extralight text-sm">{desc}</p>
        </div>
        <div>
          <span className="cursor-pointer hover:bg-gray-100 text-sm font-semibold ">
            READ MORE
          </span>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
