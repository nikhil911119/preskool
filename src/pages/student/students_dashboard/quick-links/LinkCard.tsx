import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  path: string;
  icon: React.ReactElement;
  iconBg: string;
};

const LinkCard = ({ title, path, icon, iconBg }: Props) => {
  return (
    <Link className={`card shadow-custom  rounded-[5px]  `} to={path}>
      <div
        className={`flex items-center gap-[10px] text-white p-[20px] border rounded-[5px] `}
        style={{
          borderBottom: `2px solid ${iconBg.slice(4, iconBg.length - 1)}`,
        }}
      >
        <div
          className={`icon flex justify-center items-center ${iconBg} h-[30px] w-[30px] rounded-[5px]`}
        >
          {icon}
        </div>
        <h2 className="text-[15px] text-[#202C4B] font-[500]">{title}</h2>
      </div>
    </Link>
  );
};

export default LinkCard;
