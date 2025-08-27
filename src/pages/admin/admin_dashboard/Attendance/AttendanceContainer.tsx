import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import AttendanceTab from "./AttendanceTab";

const AttendanceContainer: React.FC = () => {
  const dropdownData: string[] = [
    "Today",
    "This Week",
    "This Month",
    "This Year",
  ];
  return (
    <>
      <div className="attendance shadow-custom p-[15px] border rounded-[5px]">
        <div className="flex items-center card-heading justify-between mb-[20px]">
          <h2 className="text-[18px] font-semibold text-[#202C4B]">
            Attendance
          </h2>
          <DropMenu data={dropdownData} />
        </div>
        <div className="card-body">
          <AttendanceTab />
          <button className="">View All</button>
        </div>
      </div>
    </>
  );
};

export default AttendanceContainer;
