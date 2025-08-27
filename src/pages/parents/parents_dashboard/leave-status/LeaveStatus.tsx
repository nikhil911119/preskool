import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import { LeaveStatusData } from "../../../../constants/parents-dahboard-data/LeaveStatusData";
import EachLeaveStatus from "./EachLeaveStatus";

type Props = {};

const LeaveStatus: React.FC = (props: Props) => {
  const dropDownData = ["This Month", "This Week", "This Year", "Last Week"];

  return (
    <div className="card border shadow-custom rounded-[5px]">
      <div className="card-heading flex items-center justify-between p-[16px]">
        <h2 className="text-[18px] font-[500]">Leave Request</h2>
        <DropMenu data={dropDownData} defaultLabel={dropDownData[0]} />
      </div>
      <ul className="card-body p-[20px] border-t">
        {LeaveStatusData.map((data, index) => (
          <EachLeaveStatus
            key={index}
            title={data.title}
            icon={data.icon}
            date={data.date}
            status={data.status}
          />
        ))}
      </ul>
    </div>
  );
};

export default LeaveStatus;
