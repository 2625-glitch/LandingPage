/* eslint-disable react/prop-types */
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import './service.css';
const ServiceCard = ({ title, desc }) => {
  return (
    <div
      className=" card h-[300px] rounded-md shadowcursor-pointer
   transition-all duration-300 bg-white shadow-lg m-[30px]"
    >
      <div className="flex items-center justify-center">
        <SettingsSuggestIcon style={{ height: '60px', width: '70px' }} />,
      </div>
      <div className="flex flex-col h-[200px] justify-between">
        <div className="py-2">
          <h1 className="text-xl">{title}</h1>
          <p className="text-gray-600 font-light text-sm">{desc}</p>
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
