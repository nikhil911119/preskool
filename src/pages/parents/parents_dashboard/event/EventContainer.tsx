import React from "react";
import { Link } from "react-router-dom";
import EachEvent from "./EachEvent";

type Props = {
  className?: string;
};

const EventContainer: React.FC = ({ className }: Props) => {
  const eventData = [
    {
      title: "Event 1",
      imageUrl: "/images/avatar-01.jpg",
      date: new Date(),
      type: "Full Day",
    },
    {
      title: "Event 1",
      imageUrl: "/images/avatar-01.jpg",
      date: new Date(),
      type: "Half Day",
    },
    {
      title: "Event 1",
      imageUrl: "/images/avatar-01.jpg",
      date: new Date(),
      type: "Half Day",
    },
    {
      title: "Event 1",
      imageUrl: "/images/avatar-01.jpg",
      date: new Date(),
      type: "Half Day",
    },
    {
      title: "Event 1",
      imageUrl: "/images/avatar-01.jpg",
      date: new Date(),
      type: "Half Day",
    },
  ];
  return (
    <div className={`events border shadow-custom card ${className}`}>
      <div className="card-heading p-[16px]">
        <div className="card-heading flex justify-between items-center">
          <h2 className="text-[18px] flex font-[500] text-[#202C4B] ">
            Events List
          </h2>
          <Link to="/events" className="text-[14px] font-[500]">
            View All
          </Link>
        </div>
      </div>

      <ul className="card-body">
        {eventData.map((data, index) => (
          <EachEvent
            key={index}
            title={data.title}
            imageUrl={data.imageUrl}
            date={data.date}
            type={data.type}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventContainer;
