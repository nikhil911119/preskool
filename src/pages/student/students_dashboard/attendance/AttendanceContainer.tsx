import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import { IconCalendar } from "@tabler/icons-react";
import DonutChart from "./DonutChart";

const AttendanceContainer: React.FC = () => {
  const dropDownData = ["Today", "This Week", "This Month", "This Year"];
  const totalWorkingDays = 20;

  const ChartData = [
    { title: "Present", figure: 22 },
    { title: "Absent", figure: 22 },
    { title: "Half Day", figure: 22 },
    { title: "Late", figure: 2 },
  ];

  const dayBadgeData = [
    { day: "S", status: "Present" },
    { day: "M", status: "Present" },
    { day: "T", status: "Absent" },
    { day: "W", status: "Late" },
    { day: "T", status: "Present" },
    { day: "F", status: "Half Day" },
    { day: "S", status: "Holiday" },
  ];

  // Function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Present":
        return "#1ABE17";
      case "Absent":
        return "#E82646";
      case "Half Day":
        return "#E9EDF4";
      case "Late":
        return "blue";
      default:
        return "gray";
    }
  };

  return (
    <div className="card border shadow-custom rounded-[5px]">
      {/* Heading */}
      <div className="card-heading flex justify-between items-center p-[16px]">
        <h2 className="text-[18px] font-[500]">Attendance</h2>
        <DropMenu
          data={dropDownData}
          onFilterChange={(value) => console.log("Selected:", value)}
          defaultLabel={dropDownData[0]}
        />
      </div>

      {/* Body */}
      <div className="card-body p-[16px]">
        <div className="flex gap-[5px] items-center text-[#6A7287]">
          <IconCalendar stroke={2} height={15} width={15} color="red" />
          No of total working days{" "}
          <span className="font-semibold"> {totalWorkingDays} days</span>
        </div>

        {/* Attendance Stats */}
        <div className="grid grid-cols-4 border p-[16px] px-[0] mt-[16px]">
          {ChartData.map((data, index) => (
            <div
              className="col-span-1 border-r last:border-none text-center"
              key={index}
            >
              <span>{data.title}</span>
              <span className="block text-[16px] font-semibold">
                {data.figure}
              </span>
            </div>
          ))}
        </div>

        {/* Donut Chart */}
        <DonutChart topic={ChartData} />

        {/* Last 7 Days Attendance */}
        <div className="details p-[16px] bg-[#F8FAFC]">
          <h3 className="text-[#202C4B] text-[15px] font-[500]">Last 7 days</h3>
          <div className="flex gap-2 mt-2">
            {dayBadgeData.map((data, index) => (
              <span
                key={index}
                className="px-[10px] py-[5px] rounded-[5px] text-white font-[700] text-center"
                style={{ backgroundColor: getStatusColor(data.status) }}
              >
                {data.day}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceContainer;
