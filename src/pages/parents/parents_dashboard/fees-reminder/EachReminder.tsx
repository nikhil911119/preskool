import React from "react";

type Props = {
  icon: React.ReactElement;
  title: string;
  amount: number;
  lastDate: Date;
  iconBg: string;
  iconColor: string;
  status: "Paid" | "Unpaid";
};

const EachReminder: React.FC<Props> = ({
  icon,
  title,
  amount,
  iconBg,
  iconColor,
  ...props
}: Props) => {
  const getFormattedDate = () => {
    const date = props.lastDate;
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
    <li className="flex items-center justify-between py-[16px]">
      <div className="flex items-center gap-[10px]">
        <div
          className="icon h-[45px] w-[45px] flex items-center justify-center rounded-full"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          {icon}
        </div>
        <div className="details">
          <h3 className="text-[#202C4B] font-[500] text-[15px]">{title}</h3>
          <span className="text-[#202C4B] text-[14px]">${amount}</span>
        </div>
      </div>
      {props.status === "Paid" ? (
        <div className="date flex flex-col justify-between items-end">
          <span className="text-[15px] text-[#202C4B] block font-[500]">Last Date</span>
          <span className="block text-[#202C4BCC]">{getFormattedDate()}</span>
        </div>
      ) : (
        <button className="bg-red-600 text-white px-[8px] py-[4px] rounded-[5px] text-[12px] font-[500]">
          Pay Now
        </button>
      )}
    </li>
  );
};

export default EachReminder;
