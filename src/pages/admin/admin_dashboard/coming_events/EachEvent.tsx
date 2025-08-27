import { IconBorderLeft } from "@tabler/icons-react";
import React, { ReactElement } from "react";
interface EachEventProps {
  priority?: string;
  title: string;
  date: string;
  time: string;
  color: string;
  icon: React.ReactElement;
}

const EachEvent: React.FC<EachEventProps> = ({ title, icon, date, time }) => {
  const colors = ["#05C3FB", "#0F65CD", "#E82646"];
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length); // Get a random index
    return colors[randomIndex]; // Return the item at the random index
  };
  const style = {
    borderLeft: `3px solid ${getRandomColor()}`,
  };
  return (
    <>
      <div
        className={`each-event p-[20px] shadow-md  border-l-2 mb-7`}
        style={style}
      >
        <div className="event-top  flex items-center gap-3">
          <div className="event-icon p-[12px] bg-blue-100 rounded-[5px] flex items-center">
            {icon}
          </div>
          <div className="event-details">
            <h4 className="event-heading">{title}</h4>
            <span className="event-date block text-[14px] text-gray-500 font-normal">
              {date}
            </span>
          </div>
        </div>
        <div className="event-bottom flex  justify-between pt-5">
          <span className="event-duration inline-block text-[14px] text-gray-500 font-normal">
            {time}
          </span>
          <div>{icon}</div>
        </div>
      </div>
    </>
  );
};

export default EachEvent;
