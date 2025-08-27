import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import HomeWorkData from "../../../../constants/parents-dahboard-data/HomeWorkData";
import EachHomeWork from "./EachHomeWork";

const Homework: React.FC = () => {
  const dropDownData = ["All Subjects", "Physics", "Chemistry", "Biology"];
  const subjectTagColor = ["#0F65CD", "#53BE17", "#EB2646", "#05C3FB"];
  return (
    <div className="card border shadow-custom rounded-[5px] ">
      <div className="card-heading flex items-center justify-between p-[16px]">
        <h2 className="text-[18px] font-[500]">Homeworks</h2>
        <DropMenu data={dropDownData} defaultLabel={dropDownData[0]} filterKey={""} onFilterChange={function (filterKey: string, value: string | number): void {
          throw new Error("Function not implemented.");
        } } />
      </div>
      <ul className="card-body p-[16px] border-t pt-[2px]">
        {HomeWorkData.map((data, index) => (
          <EachHomeWork
            key={index}
            image={data.imageUrl}
            subject={data.subject}
            title={data.title}
            teacherName={data.teacherName}
            dueData={data.dueDate}
            teacherImageUrl={data.teacherImageUrl}
            tagColor={subjectTagColor[index]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Homework;
