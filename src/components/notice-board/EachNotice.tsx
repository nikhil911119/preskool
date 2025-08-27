import { IconCalendar } from "@tabler/icons-react";
import React from "react";
import "./notice.css";

type Props = {
  title: string;
  icon: React.ReactElement;
  addedDate: Date;
  category?: string;
};

const EachNotice = ({ addedDate, title, icon, ...props }: Props) => {
  const remainingDays = () => {
    const today = new Date();
    const noticeDate = new Date(addedDate);
    const timeDiff = noticeDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysDiff;
  };
  return (
    <li className="each-notice flex justify-between items-center mb-[25px] last:mb-0">
      <div className="details flex items-center gap-[10px]">
        <div className="icon p-[8px] rounded-full bg-gray-300">{icon}</div>
        <div className="title-date">
          <h2>{title}</h2>
          <span className="flex items-center gap-[5px] text-[#6A7287]">
            <IconCalendar stroke={1} height={15} width={15} color="#6A7287" />
            {addedDate.toDateString()}
          </span>
        </div>
      </div>

      <div className="duration-of-notice">
        <span className="block text-[#202C4B] font-bold text-[12px] bg-[#E9EDF4] px-[10px] py-[4px] rounded-[5px]">
          {remainingDays()} days
        </span>
      </div>
    </li>
  );
};

export default EachNotice;
