import { IconCalendar, IconClock } from "@tabler/icons-react";
import React from "react";

type Props = {
  examType: string;
  examDate: string;
  examStartTime: string;
  examEndTime: string;
  roomNumber: number;
  subjectName: string;
};

const EachExam: React.FC<Props> = ({
  examType,
  examDate,
  examStartTime,
  examEndTime,
  roomNumber,
  subjectName,
}: Props) => {
  function getRemainingDays(examDateStr: string): number {
    const today = new Date().getTime();
    const examDate = new Date(examDateStr).getTime();

    const diffInMs = examDate - today;
    const remainingDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return remainingDays > 0 ? remainingDays : 0;
  }
  return (
    <div className="border p-[16px] mb-[20px] last:m-0">
      <div className="flex justify-between mb-[16px]">
        <h4 className="text-[16px] font-[500]">{examType}</h4>
        <span className=" flex gap-[2px] badge text-red-600 bg-red-100 rounded-[5px] px-[7px] py-[4px] font-[700] text-[10px] tracking-wider">
          <IconClock stroke={2} height={15} width={15} />
          {getRemainingDays(examDate)} Days More
        </span>
      </div>
      <div className="details flex justify-between items-center ">
        <div className="left">
          <h5 className="text-[15px] font-[500] mb-[5px]">{subjectName}</h5>
          <span className="flex gap-[2px] text-[#6A7287] items-center">
            <IconClock stroke={2} height={15} width={15} />
            {examStartTime} - {examEndTime}
          </span>
        </div>
        <div className="right">
          <span className="flex items-center gap-[2px] text-[#6A7287] mb-[5px]">
            <IconCalendar stroke={2} height={15} width={15} />
            {examDate}
          </span>
          <span className="text-red-600 text-right block">
            Room No: {roomNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EachExam;
