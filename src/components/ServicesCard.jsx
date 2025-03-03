/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
    return (
        <div className="p-6 border-gray-300 rounded flex flex-col items-center transition duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-black text-white transition duration-300 text-3xl">
                    {service.icon}
                </div>
            </div>
            <h3 className="text-2xl font-semibold text-black transition duration-300 my-3">
                {service.title}
            </h3>
            <p className="text-black text-[13.4px] transition duration-300">
                {service.desc}
            </p>
        </div>
    );
};

export default ServiceCard;