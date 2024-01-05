import React from "react";
import { StationCategory } from "../utils/constants";

const StationMenu = ({ subCategory, setSubCategory }) => {
  return (
    <div className="w-full  ">
      <div className="flex flex-row justify-start pt-[3.5em] pb-4 px-12 gap-8 ">
        {StationCategory.map((category) => (
          <p
            className={`text-[1.2em] text-gray-500 font-[600] cursor-pointer tracking-wider ${
              category.name === subCategory && "text-[#1a1a1a] font-[700]"
            }`}
            onClick={() => setSubCategory(category.name)}
            key={category.name}
          >
            {" "}
            {category.name}{" "}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StationMenu;
