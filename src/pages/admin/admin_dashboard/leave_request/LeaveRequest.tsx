import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import LeaveRequestData from "../../../../constants/admin-dashboard-data/LeaveRequestData";
import EachLeaveRequest from "./EachLeaveRequest";

const Leave_request: React.FC = () => {
  const dropdownData: string[] = ["Today", "Last Week", "This Month"];
  return (
    <div className="leave-request p-[15px] shadow-custom border rounded-[5px h-full]">
      <div className="card-heading flex mb-[25px] justify-between items-center p-[10px] border-b-2">
        <h3 className="text-[18px] font-[500] text-[#202C4B]">
          Leave&nbsp;Request
        </h3>
        <DropMenu data={dropdownData} />
      </div>
      <div className="requests-container p=[15px]">
        {LeaveRequestData.map((item, index) => (
          <EachLeaveRequest
            leaveDuration={item.leaveDuration}
            imageUrl={item.imageUrl}
            ApplicantName={item.ApplicantName}
            position={item.position}
            applyDate={item.applyDate}
            priority={item.priority}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Leave_request;
