import React from "react";
import eventData from "./EventData";
import EachEvent from "./EachEvent";

const EventContainer: React.FC = () => {
  return (
    <div className="events">
      <div className="card-heading">
        <h3 className="text-[18px] flex mb-4 font-[500] text-[#202C4B]">
          Upcoming Events
        </h3>
      </div>
      {eventData.map((item, index) => (
        <EachEvent
          title={item.title}
          icon={item.icon}
          date={item.date}
          time={item.time}
          color={""}
          key={index}
        />
      ))}
    </div>
  );
};

export default EventContainer;
