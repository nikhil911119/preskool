import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import ColumnChart from "./ColumnChart";

const FeeCollection: React.FC = () => {
  const dropdownData: string[] = [
    "This Month",
    "This Year",
    "Last 12 Quarters",
    "Last 16 Quarters",
  ];
  return (
    <div className="fee-collection p-[15px] shadow-custom border">
      <div className="card-heading flex justify-between items-center">
        <h2 className="text-[18px] flex mb-4 font-[500] text-[#202C4B]">
          Fee Collection
        </h2>
        <DropMenu data={dropdownData} />
      </div>
      <div className="card-body">
        <ColumnChart />
      </div>
    </div>
  );
};
export default FeeCollection;
