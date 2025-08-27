import { IconCircleFilled } from "@tabler/icons-react";
import React from "react";

type Props = {
  title: string;
  icon: React.ReactElement;
  date: Date;
  status: string;
};

const EachLeaveStatus: React.FC<Props> = ({
  title,
  icon,
  date,
  status,
}: Props) => {
  const getFormattedDate = () => {
    const date = new Date();
    const day = date.getDate();
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[date.getMonth()]; // Get short month name
    const year = date.getFullYear().toString();

    return `${day} ${month} ${year}`;
  };
  return (
    <li className="each-item p-[16px] bg-[#F8FAFC] mb-[16px] rounded-[5px] flex justify-between items-center last:mb-0">
      <div className="flex items-center gap-[10px]">
        <div
          className="icon h-[45px] w-[45px] flex justify-center items-center"
          style={{ backgroundColor: "#FDE9ED", color: "#E82646" }}
        >
          {icon}
        </div>
        <div className="details">
          <h3 className="text-[15px] font-[500]">{title}</h3>
          <span className="text-[14px] text-[#6A7287]">
            Date:{""} {getFormattedDate()}
          </span>
        </div>
      </div>
      <span
        className="badge flex items-center gap-[5px] px-[7px] py-[2px] rounded-[5px] text-[12px] font-semibold text-white"
        style={
          status === "Approved"
            ? { backgroundColor: "#1ABE17" }
            : status === "Declined"
            ? { backgroundColor: "#E82646" }
            : { backgroundColor: "#05C3FB" }
        }
      >
        <IconCircleFilled height={6} width={6} />
        {status}
      </span>
    </li>
  );
};

export default EachLeaveStatus;
