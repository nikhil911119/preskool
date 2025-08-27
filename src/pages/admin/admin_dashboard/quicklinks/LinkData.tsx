import React from "react";
import { IconCalendar } from "@tabler/icons-react";
interface LinkData {
  title: string;
  link: string;
  icon: React.ReactElement;
  iconcolor?: string;
  iconbg?: string;
}

const LinkData: LinkData[] = [
  {
    title: "Calendar",
    link: "/dashboard/calendar",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg-[#E8F9E8]",
    iconcolor: "bg-[#1ABE17]",
  },
  {
    title: "Exam Results",
    link: "/dashboard/exam-results",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg-[#F2F5FF]",
    iconcolor: "bg-[#DC2626]",
  },
  {
    title: "Attendance",
    link: "/dashboard/attendance",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg-[#FEF8EA]",
    iconcolor: "bg-[#EAB300]",
  },
  {
    title: "Fees",
    link: "/dashboard/Fees",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg-[#E8FCFF]",
    iconcolor: "bg-[#6FCCD8]",
  },
  {
    title: "HomeWork",
    link: "/dashboard/homework",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg-[#FFD6D6]",
    iconcolor: "bg-[#FF4D4F]",
  },
  {
    title: "Reports",
    link: "/dashboard/reports",
    icon: <IconCalendar stroke={2} color="white" />,
    iconbg: "bg[#E6F9FF]",
    iconcolor: "bg-[#05C3FB]",
  },
];

export default LinkData;
