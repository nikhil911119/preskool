import { IconCircleFilled, IconClock } from "@tabler/icons-react";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";

type Props = {
  teacherImageUrl: string;
  subject: string;
  startTime: string;
  endTime: string;
};

const EachSchedule: React.FC<Props> = ({
  teacherImageUrl,
  subject,
  startTime,
  endTime,
}: Props) => {
  const [status, setStatus] = useState("Not Completed");

  useEffect(() => {
    if (startTime && endTime) {
      const classStartTime = dayjs(startTime, "HH:mm");
      const classEndTime = dayjs(endTime, "HH:mm");
      const currentTime = dayjs();

      if (currentTime.isBefore(classStartTime)) {
        setStatus("Yet to Start");
      } else if (
        currentTime.isAfter(classStartTime) &&
        currentTime.isBefore(classEndTime)
      ) {
        setStatus("In Progress");
      } else if (currentTime.isAfter(classEndTime)) {
        setStatus("Completed");
      }
    }
  }, [startTime, endTime]);

  const setStatusColor = (status: string) => {
    switch (status) {
      case "Yet to Start":
        return {
          backgroundColor: "#FDF7E5",
          color: "#EAB300",
        };
      case "In Progress":
        return {
          backgroundColor: "#E6F9FF",
          color: "#05C8FC",
        };
      case "Completed":
        return {
          backgroundColor: "#E7F9E7",
          color: "#66C117",
        };
      default:
        return {
          backgroundColor: "#FDF7E5",
          color: "#EAB300",
        };
    }
  };
  return (
    <li className="each schedule p-[16px] border flex justify-between items-center mb-[20px] last:m-0">
      <div className="detail flex gap-[10px] items-center">
        <img
          src={teacherImageUrl}
          alt=""
          className="h-[45px] w-[45px] rounded-[5px] "
        />

        <div className="date">
          <h3
            className="text-[#202C4B] font-[500] text-[15px]"
            style={
              status === "Completed" ? { textDecoration: "line-through" } : {}
            }
          >
            {subject}
          </h3>
          <span className="flex items-center gap-[5px] text-[#6A7287]">
            <IconClock stroke={2} height={15} width={15} />
            {startTime} - {endTime}
          </span>
        </div>
      </div>
      <span
        className="badge flex items-center gap-[4px] px-[7px] py-[4px] text-[10px] font-[700] rounded-[5px] tracking-widest"
        style={setStatusColor(status)}
      >
        <IconCircleFilled stroke={2} height={6} width={6} />
        {status}
      </span>
    </li>
  );
};

export default EachSchedule;
