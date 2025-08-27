import { IconBooks } from "@tabler/icons-react";

interface NoticeDataProps {
  title: string;
  addedDate: Date;
  category: string;
  icon: React.ReactElement;
}

const NoticeData: NoticeDataProps[] = [
  {
    title: "New Syllabus Instructions",
    addedDate: new Date(),
    category: "Syllabus",
    icon: <IconBooks stroke={2} className="h-[15px] w-[15px]" />,
  },
  {
    title: "New Syllabus Instructions",
    addedDate: new Date(),
    category: "Syllabus",
    icon: <IconBooks stroke={2} className="h-[15px] w-[15px]" />,
  },
  {
    title: "New Syllabus Instructions",
    addedDate: new Date(),
    category: "Syllabus",
    icon: <IconBooks stroke={2} className="h-[15px] w-[15px]" />,
  },
  {
    title: "New Syllabus Instructions",
    addedDate: new Date(),
    category: "Syllabus",
    icon: <IconBooks stroke={2} className="h-[15px] w-[15px]" />,
  },
  {
    title: "New Syllabus Instructions",
    addedDate: new Date(),
    category: "Syllabus",
    icon: <IconBooks stroke={2} className="h-[15px] w-[15px]" />,
  },
];
export default NoticeData;
