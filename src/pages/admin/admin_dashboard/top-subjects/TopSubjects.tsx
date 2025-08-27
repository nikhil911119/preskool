import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import TopSubjectsData from "../../../../constants/admin-dashboard-data/TopSubjectsData";
import SubjectProgress from "./SubjectProgress";

type Props = {};

const TopSubjects: React.FC = (props: Props) => {
  const dropdownData = ["Class 1", "Class 2", "Class 3", "Class 3"];
  return (
    <div className="top-subjects-card shadow-custom border rounded-[5px]">
      <div className="card-heading p-[15px] flex justify-between items-center">
        <h2 className="text-[18px] mb-0 font-[500] text-[#38393c]">
          Top Subjects
        </h2>
        <DropMenu data={dropdownData} defaultLabel={dropdownData[0]} />
      </div>

      <div className="card-body p-[15px]">
        <div className="note text-[#1ABE17] bg-[#E7F9E7] p-[15px] rounded-[5px] mb-[20px]">
          These Result are obtained from the syllabus completion on the
          respective Class
        </div>

        <div className="subject-progress">
          {TopSubjectsData.map((data, index) => (
            <SubjectProgress
              key={index}
              subjectName={data.subjectName}
              progressPercentage={data.progressPercentage}
              color={data.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopSubjects;
