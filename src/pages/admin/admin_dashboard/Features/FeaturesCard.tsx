import React from "react";
import { Link } from "react-router-dom";
import "./features.css";
type Props = {
  title: string;
  path: string;
  icon: () => React.ReactElement;
  iconbg: string;
  cardbg: string;
};

const FeaturesCard = ({ title, path, icon, iconbg, cardbg }: Props) => {
  return (
    <Link
      className={`each-features-card p-[25px] ${cardbg} shadow-custom border-white rounded-[5px]`}
      to={path}
    >
      <div className="flex items-center gap-[10px]">
        <div className={`icon ${iconbg} p-[10px] rounded-[5px]`}>{icon()}</div>
        <div className="flex ml-3">
          <h2 className="text-[#202C4B] font-semibold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default FeaturesCard;
