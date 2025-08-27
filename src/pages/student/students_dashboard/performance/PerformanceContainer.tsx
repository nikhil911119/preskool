import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";

type Props = {};
interface graphDataType {
  title: string;
  figure: number;
}
const PerformanceContainer = (props: Props) => {
  const graphData = [
    {
      title: "Average Attendance",
      figure: 60,
    },
    {
      title: "Average Attendance",
      figure: 60,
    },
  ];

  const dropDownOptions = ["2024-2025", "2023-2024", "2022-20253"];
  return (
    <>
      <div className="card border rounded-[5px]">
        <div className="card-heading flex justify-between items-center p-[16px]">
          <h2 className="text-[18px] font-[500] text-[#202C4B]">Performance</h2>
          <DropMenu
            data={dropDownOptions}
            defaultLabel={dropDownOptions[0]}
            onFilterChange={function (value: any): void {
              throw new Error("Function not implemented.");
            }}
          />
        </div>
      </div>
    </>
  );
};

export default PerformanceContainer;
