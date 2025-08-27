import { IconCalendar, IconCircleFilled } from "@tabler/icons-react";
import React from "react";

type Props = {
  title: string;
  imageUrl: string;
  date: Date;
  type: string;
};

const EachEvent: React.FC<Props> = ({ title, imageUrl, date, type }: Props) => {
  const badgeColor = {
    fullDay: "#E82646",
    halfDay: "#05C3FB",
  };
  const badgeBg = {
    fullDay: "#FDE9EC",
    halfDay: "#E6F9FF",
  };
  return (
    <li className="each-notice flex justify-between items-center p-[16px] border-t last:mb-0">
      <div className="details flex items-center gap-[10px]">
        <div className="icon rounded-[4px] bg-gray-300 h-[45px] w-[45px] ">
          <img src={imageUrl} alt={title} className="rounded-[4px]" />
        </div>
        <div className="title-date">
          <h3 className="text-[15px] font-[500]">{title}</h3>
          <span className="flex items-center gap-[5px] text-[#6A7287]">
            <IconCalendar stroke={1} height={15} width={15} color="#6A7287" />
            {date.toDateString()}
          </span>
        </div>
      </div>

      <div className="duration-of-notice">
        <span
          className="badge flex items-center gap-[5px] font-bold text-[10px]  px-[7px] py-[4px] rounded-[5px]"
          style={
            type === "Full Day"
              ? { backgroundColor: badgeBg.fullDay, color: badgeColor.fullDay }
              : { backgroundColor: badgeBg.halfDay, color: badgeColor.halfDay }
          }
        >
          <IconCircleFilled height={6} width={6} />
          {type}
        </span>
      </div>
    </li>
  );
};

export default EachEvent;
