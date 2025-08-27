import React, { useState } from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import "./examresults.css";
import ExamResultsData from "../../../../constants/parents-dahboard-data/ExamResultsData";
import EachResult from "./EachResult";

const ExamResult: React.FC = () => {
  const classDropdownData = ["All Classes", "I", "II", "III", "IV"];
  const examTypeDropdownData = [
    "All Exams",
    "Quaterly",
    "Practical",
    "1st Term",
  ];

  const [selectedClass, setSelectedClass] = useState<string | number>(
    classDropdownData[0]
  );
  const [selectedExamType, setSelectedExamType] = useState<string>(
    examTypeDropdownData[0]
  );

  const filteredItems = ExamResultsData.filter(
    (item) =>
      (selectedClass === "All Classes" ||
        item.studentClass === selectedClass) &&
      (selectedExamType === "All Exams" || item.examType === selectedExamType)
  );

  return (
    <div className="card border shadow-custom">
      <div className="card-heading flex justify-between items-center px-[20px] py-[16px] border-b">
        <h2>Exam Result</h2>
        <div className="dropdown-group flex items-center gap-[10px]">
          <DropMenu
            data={classDropdownData}
            defaultLabel={selectedClass}
            onFilterChange={setSelectedClass}
          />
          <DropMenu
            data={examTypeDropdownData}
            defaultLabel={selectedExamType}
            onFilterChange={setSelectedExamType}
          />
        </div>
      </div>
      <div className="card-body">
        <table className="w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Section</th>
              <th>Marks%</th>
              <th>Exams</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="py-[20px]">
            {filteredItems.map((data, index) => (
              <EachResult
                key={index}
                studentId={data.studentId}
                studentName={data.studentName}
                image={data.image}
                section={data.section}
                examType={data.examType}
                marks={data.marks}
                status={data.status}
                studentClass={data.studentClass}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamResult;
