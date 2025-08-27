import React from "react";
import EachExam from "./EachExam";

interface examDataType {
  examType: string;
  examDate: string;
  examStartTime: string;
  examEndTime: string;
  roomNumber: number;
  subjectName: string;
}

const Exams: React.FC = () => {
  const examData: examDataType[] = [
    {
      examType: "1st Quarterly",
      examDate: "2025-06-01",
      examStartTime: "10:00 AM",
      examEndTime: "11:00 AM",
      roomNumber: 12,
      subjectName: "Maths",
    },
    {
      examType: "1st Quarterly",
      examDate: "2025-06-01",
      examStartTime: "10:00 AM",
      examEndTime: "11:00 AM",
      roomNumber: 12,
      subjectName: "Maths",
    },
  ];

  return (
    <>
      <div className="exams p-[16px]">
        <h3 className="text-[16px] font-[500] mb-[16px]">Exams</h3>
        {examData.map((data, index) => (
          <EachExam
            key={index}
            examType={data.examType}
            examDate={data.examDate}
            examStartTime={data.examStartTime}
            examEndTime={data.examEndTime}
            roomNumber={data.roomNumber}
            subjectName={data.subjectName}
          />
        ))}
      </div>
    </>
  );
};

export default Exams;
