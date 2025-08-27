import { IconSquarePlus } from "@tabler/icons-react";
import React from "react";
import Calendar from "react-calendar";
import Exams from "./Exams";

const Schedule: React.FC = () => {
  const date = new Date();
  return (
    <>
      <div className="card border shadow-custom">
        <div className="card-heading p-[16px] flex justify-between items-center">
          <h2 className="text-[18px] font-[500] ">Schedules</h2>
          <button className="flex items-center gap-1">
            <IconSquarePlus stroke={2} size={18} />
            Add new
          </button>
        </div>

        <div className="card-body border-t">
          <Calendar value={date} className=" w-full p-[16px]" />
          <Exams />
        </div>
      </div>
    </>
  );
};

export default Schedule;
