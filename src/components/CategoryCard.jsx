/* eslint-disable react/prop-types */
const CategoryCard = ({ icon, title }) => {
    return (
        <div className="border border-gray-300 rounded-lg flex flex-col items-center px-6 py-4 space-y-2">
            <div className="text-black text-4xl md:text-5xl font-thin">{icon}</div>
            <p className="text-md pt-4 text-black">{title}</p>
        </div>
    );
};

export default CategoryCard;