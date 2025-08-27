import { IconCalendar } from "@tabler/icons-react";
import React from "react";

interface FeatureItem {
  title: string;
  path: string;
  icon: () => React.ReactElement; // 🔹 Change icon type to a function
  iconbg: string;
  cardbg: string;
}

const FEATURE_COLORS = {
  attendance: { iconbg: "bg-[#EAB300]", cardbg: "bg-[#FEF8EA]" },
  events: { iconbg: "bg-[#1ABE17]", cardbg: "bg-[#E8F9E8]" },
  meetings: { iconbg: "bg-[#E82646]", cardbg: "bg-[#FDE9ED]" },
  holidays: { iconbg: "bg-[#6FCCD8]", cardbg: "bg-[#E8FCFF]" },
};

const FeaturesData: FeatureItem[] = [
  {
    title: "View Attendance",
    path: "/student-attendance",
    icon: () => <IconCalendar stroke={2} color="white" className="h-[25px] w-[25px]" />, // 🔹 Function returning JSX
    ...FEATURE_COLORS.attendance,
  },
  {
    title: "Upcoming Events",
    path: "/upcoming-events",
    icon: () => <IconCalendar stroke={2} color="white" className="h-[25px] w-[25px]" />,
    ...FEATURE_COLORS.events,
  },
  {
    title: "Scheduled Meetings",
    path: "/scheduled-meetings",
    icon: () => <IconCalendar stroke={2} color="white" className="h-[25px] w-[25px]" />,
    ...FEATURE_COLORS.meetings,
  },
  {
    title: "Holiday Calendar",
    path: "/holiday-calendar",
    icon: () => <IconCalendar stroke={2} color="white" className="h-[25px] w-[25px]" />,
    ...FEATURE_COLORS.holidays,
  },
];

export default FeaturesData;
