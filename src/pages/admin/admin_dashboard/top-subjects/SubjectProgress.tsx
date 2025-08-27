import React from "react";

type Props = {
  subjectName: string;
  progressPercentage: number;
  color: string;
};

const SubjectProgress: React.FC<Props> = ({ subjectName, progressPercentage, color }) => {
  return (
    <div className="each-subject px-4 py-2 flex justify-between items-center rounded-md border">
      <span>{subjectName}</span>
      <div className="progress-bar w-[60%] h-1 bg-[#E9EDF4] rounded-full overflow-hidden">
        <div
          className={`progress h-full ${color} rounded-full`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SubjectProgress;
