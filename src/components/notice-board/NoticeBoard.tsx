import React from "react";
import { Link } from "react-router-dom";
import NoticeData from "../../constants/admin-dashboard-data/NoticeData";
import EachNotice from "./EachNotice";
type Props = {
  className?: string;
};
const NoticeBoard: React.FC<Props> = ({ className }: Props) => {
  return (
    <>
      <div
        className={`notice-board shadow-custom rounded-[5px] p-[15px] border pt-0 ${className} h-full`}
      >
        <div className="card-heading flex justify-between border-b items-center p-[20px] mb-[30px]">
          <h2 className="text-[18px] font-semibold">Notice Board</h2>
          <Link to={"/noticeboard"}>ViewAll</Link>
        </div>
        <ul className="notice-list">
          {NoticeData.map((data, index) => (
            <EachNotice
              addedDate={data.addedDate}
              category={data.category}
              title={data.title}
              icon={data.icon}
              key={index}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NoticeBoard;
