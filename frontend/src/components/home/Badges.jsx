import React from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { SiDassaultsystemes } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TbBrandSafari, TbChartBarPopular } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";

const data = [
  {
    id: 1,
    icon: <AiOutlineProduct />,
    text: "Products",
  },
  {
    id: 2,
    icon: <SiDassaultsystemes />,
    text: "Systems",
  },
  {
    id: 3,
    icon: <FaRegNewspaper />,
    text: "Latest",
  },
  {
    id: 4,
    icon: <TbBrandSafari />,
    text: "Brands",
  },
  {
    id: 5,
    icon: <TbChartBarPopular />,
    text: "Popular",
  },
  {
    id: 6,
    icon: <MdElectricBolt />,
    text: "Appliances",
  },
];

function Badges() {
  return (
    <div className="p-4 mt-16">
      <div className="flex flex-wrap gap-12 justify-center items-center">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 items-center justify-center"
          >
            <h2 className="text-[30px] hover:cursor-pointer border border-[#e7e7e7] rounded-full p-2">
              {item.icon}
            </h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Badges;
