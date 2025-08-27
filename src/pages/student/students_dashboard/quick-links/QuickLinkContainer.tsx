import {
  IconCalendar,
  IconCalendarStats,
  IconCalendarTime,
  IconCalendarUser,
  IconHexagonalPrismPlus,
  IconReportMoney,
} from "@tabler/icons-react";
import React from "react";
import LinkCard from "./LinkCard";

interface LinkDataTypes {
  title: string;
  link: string;
  icon: React.ReactElement;
  backGroundColor: string;
}
const QuickLinkContainer: React.FC = () => {
  const LinkData: LinkDataTypes[] = [
    {
      title: "Pay Fees",
      link: "/student/attendance",
      icon: <IconReportMoney stroke={2} height={15} width={15} />,
      backGroundColor: "bg-[#DC2626]",
    },
    {
      title: "Exam Results",
      link: "/student/exam-results",
      icon: <IconHexagonalPrismPlus stroke={2} height={15} width={15} />,
      backGroundColor: "bg-[#1ABE17]",
    },
    {
      title: "Calender",
      link: "/student/calendar",
      icon: <IconCalendar stroke={2} height={15} width={15} />,
      backGroundColor: "bg-[#EAB300]",
    },
    {
      title: "AFttendence",
      link: "/student/attendance",
      icon: <IconCalendarStats stroke={2} height={15} width={15} />,
      backGroundColor: "bg-[#202C4B]",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-[25px] w-full ">
      {LinkData.map((data, index) => (
        <div className="col-span-3" key={index}>
          <LinkCard
            title={data.title}
            path={data.link}
            icon={data.icon}
            iconBg={data.backGroundColor}
          />
        </div>
      ))}
    </div>
  );
};

export default QuickLinkContainer;
