import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import EachActivity from "./EachActivity";
import StudentActivityData from "../../../../constants/admin-dashboard-data/StudentActivityData";

const StudentActivity: React.FC = () => {
  const dropdownData: string[] = ["This Week", "This Month", "This Year"];
  return (
    <div className="student-activity-card shadow-custom border rounded-[5px]">
      <div className="card-heading flex justify-between items-center p-[20px]  ">
        <h2 className="text-[18px] font-[600] text-[#202C4B]">
          Students Activity
        </h2>
        <DropMenu data={dropdownData} defaultLabel="This Week"/>
      </div>
      <div className="card-body px-[20px]">
        {StudentActivityData.map((data, index) => (
          <EachActivity
            key={index}
            title={data.title}
            desc={data.desc}
            iconUrl={data.iconUrl}
            className="mb-[16px] last:mb-0"
          />
        ))}
      </div>
    </div>
  );
};

export default StudentActivity;
