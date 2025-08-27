import { IconTag } from "@tabler/icons-react";
import React from "react";

type Props = {
  image: string;
  subject: string;
  title: string;
  teacherName: string;
  dueData: Date;
  teacherImageUrl: string;
  tagColor: string;
};

const EachHomeWork: React.FC<Props> = ({
  image,
  subject,
  title,
  teacherName,
  dueData,
  teacherImageUrl,
  tagColor,
}: Props) => {
  return (
    <li className="each-items py-[16px] flex gap-[10px] border-b last:border-none">
      <div className="image-wrapper-">
        <img src={image} alt={title} className="h-[64px] w-[64px]" />
      </div>
      <div className="details">
        <span
          className="flex items-center gap-[5px]"
          style={{ color: tagColor }}
        >
          <IconTag height={15} width={15} stroke={2} />
          {subject}
        </span>
        <h3 className="text-[#202C4B] text-[15px] font-[500]">{title}</h3>
        <span className="teacher flex gap-[5px]">
          <img
            src={teacherImageUrl}
            alt={teacherName}
            className="h-[20px] w-[20px] rounded-full"
          />
          <span className="text-[black]">{teacherName}</span>
          <span className="due-date text-[#6A7296]">
            {dueData.toDateString()}
          </span>
        </span>
      </div>
    </li>
  );
};

export default EachHomeWork;
