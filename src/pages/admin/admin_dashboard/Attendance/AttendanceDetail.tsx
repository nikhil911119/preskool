import React from "react";
interface topicProps {
  title: string;
  figure: number;
}
interface attendanceDataProps {
  topic: topicProps;
  figure: number;
}

const AttendanceDetail: React.FC<attendanceDataProps> = ({
  topic,
}: attendanceDataProps) => {
  return (
    <>
      <div
        className={`${topic.title} p-5 flex flex-col items-center justify-center shadow-md rounded-[5px]`}
      >
        <span className="data">{topic.figure}</span>
        <span className="title">{topic.title}</span>
      </div>
    </>
  );
};

export default AttendanceDetail;
