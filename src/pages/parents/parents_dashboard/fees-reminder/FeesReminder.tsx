import React from "react";
import { Link } from "react-router-dom";

import FeesReminderData from "../../../../constants/parents-dahboard-data/FeesReminderData";
import EachReminder from "./EachReminder";

const FeesReminder: React.FC = () => {
  const iconColor = ["#0F65CD", "#53BE17", "#EB2646", "#05C3FB"];
  const iconBg = iconColor.map((color) => color + "1a");
  return (
    <div className="card border shadow-custom">
      <div className="card-heading flex p-[16px] justify-between items-center">
        <h2 className="text-[18px] font-[500]">Fees Reminder</h2>
        <Link to={"/fees"} className="text-red-600 font-semibold">
          View All
        </Link>
      </div>
      <ul className="card-body p-[20px] border-t">
        {FeesReminderData.map((data, index) => (
          <EachReminder
            key={index}
            icon={data.icon}
            title={data.title}
            amount={data.amount}
            lastDate={data.lastDate}
            iconColor={iconColor[index] || "#0F65CD"}
            iconBg={iconBg[index] || "#0F65CD1a"}
            status={data.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default FeesReminder;
