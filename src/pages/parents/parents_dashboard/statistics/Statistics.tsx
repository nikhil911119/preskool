import React from "react";
import LineGraph from "./LineGraph";
import DropMenu from "../../../../components/dropdown/DropMenu";

type Props = {};
const statisticsData = {
  avgExamScore: [47, 85, 32, 91, 76, 54, 99, 67, 38, 82, 10, 10],
  avgAttendance: [45, 50, 47, 53, 56, 58, 60, 63, 67, 70, 10, 20],
};
const Statistics: React.FC = (props: Props) => {
  const statisticsDropDownData = ["This Month", "This Year", "Last Week"];
  return (
    <div className="card shadow-custom border ">
      <div className="card-heading p-[20px] flex justify-between items-center">
        <h2 className="text-[18px] font-semibold">Statistics</h2>
        <DropMenu
          data={statisticsDropDownData}
          defaultLabel={statisticsDropDownData[0]}
        />
      </div>
      <div className="card-body p-[20px] border-t">
        <div className="h-[100%]">

        <LineGraph
          avgExamScore={statisticsData.avgExamScore}
          avgAttendance={statisticsData.avgAttendance}
        />
        </div>
      </div>
    </div>
  );
};

export default Statistics;
