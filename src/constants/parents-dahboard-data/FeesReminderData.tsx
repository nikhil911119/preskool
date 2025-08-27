import {
  IconBook,
  IconBusStop,
  IconMeat,
  IconReportMoney,
} from "@tabler/icons-react";

interface FeesReminderDataProps {
  icon: React.ReactElement;
  title: string;
  amount: number;
  lastDate: Date;
  status: "Paid" | "Unpaid";
}
const FeesReminderData: FeesReminderDataProps[] = [
  {
    icon: <IconBusStop stroke={2} className="h-[15px] w-[15px]" />,
    title: "School Fees",
    amount: 10000,
    lastDate: new Date(),
    status: "Paid",
  },
  {
    icon: <IconBusStop stroke={2} className="h-[15px] w-[15px]" />,
    title: "School Fees",
    amount: 10000,
    lastDate: new Date(),
    status: "Paid",
  },
  {
    icon: <IconReportMoney stroke={2} className="h-[15px] w-[15px]" />,
    title: "Exam Fees",
    amount: 10000,
    lastDate: new Date(),
    status: "Paid",
  },
  {
    icon: <IconMeat stroke={2} className="h-[15px] w-[15px]" />,
    title: "Mesh Fees",
    amount: 10000,
    lastDate: new Date(),
    status: "Unpaid",
  },
  {
    icon: <IconBook stroke={2} className="h-[15px] w-[15px]" />,
    title: "Mesh Fees",
    amount: 10000,
    lastDate: new Date(),
    status: "Unpaid",
  },
];

export default FeesReminderData;
