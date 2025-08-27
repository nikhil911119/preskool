import { IconBrandSocketIo, IconMedicalCross } from "@tabler/icons-react";

interface LeaveStatusDataProps {
  title: string;
  icon: React.ReactElement;
  date: Date;
  status: "Pending" | "Approved" | "Declined";
}
export const LeaveStatusData: LeaveStatusDataProps[] = [
  {
    title: "Parents Leave",
    icon: <IconBrandSocketIo stroke={2} className="h-[15px] w-[15px]" />,
    date: new Date(),
    status: "Approved",
  },
  {
    title: "Emergency Leave",
    icon: <IconMedicalCross stroke={2} className="h-[15px] w-[15px]" />,
    date: new Date(),
    status: "Declined",
  },
  {
    title: "Feaver",
    icon: <IconMedicalCross stroke={2} className="h-[15px] w-[15px]" />,
    date: new Date(),
    status: "Approved",
  },
  {
    title: "Feaver",
    icon: <IconBrandSocketIo stroke={2} className="h-[15px] w-[15px]" />,
    date: new Date(),
    status: "Pending",
  },
];
