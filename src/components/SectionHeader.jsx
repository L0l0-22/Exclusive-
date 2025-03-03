/* eslint-disable react/prop-types */
import red from "../assets/images/red rectangle.png";

const SectionHeader = ({ title }) => {
    return (
        <div className="flex items-center space-x-2 w-[95%] mx-auto">
            <img src={red} width={20} height={40} alt="red rectangle" />
            <div className="text-red-500 px-2 py-1 rounded-md text-md font-semibold">
                {title}
            </div>
        </div>
    );
};

export default SectionHeader;