import React from "react";
import "../login.css";
import NoticeData from "../../../constants/login-page-data/NoticeData";
import EachNews from "./EachNotice";

const Notice: React.FC = () => {
  return (
    <div className="notice w-[80%] mx-auto p-[25px] bg-[#FFFFFF1A] ">
      <div className="heading">
        <h1 className="text-white font-[500] text-[18px] mb-[10px]">
          Whats New on Preskool!!!
        </h1>
        <div className="body">
          {NoticeData.map((data, index) => (
            <EachNews
              key={index}
              title={data.title}
              discription={data.discription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notice;
