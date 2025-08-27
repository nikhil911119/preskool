import {  IconCircleFilled } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  imageUrl: string;
  studentId: string;
  studentName: string;
  studentClass: string;
  studentSection: string;
  studentRoll: string;
  className?: string;
};

const StudentDetailCard: React.FC<Props> = ({
  imageUrl,
  studentId,
  studentName,
  studentClass,
  studentSection,
  studentRoll,
  className,
}: Props) => {
  return (
    <>
      <div className={`card bg-[#202C4B] p-[20px] rounded-[5px] ${className}`}>
        <div className="card-body flex items-center gap-[10px] pb-[20px]">
          <div className="image-wrapper">
            <img
              src={imageUrl}
              alt=""
              className="h-[80px] aspect-square rounded-[5px]"
            />
          </div>
          <div className="details">
            <span className=" inline-block mb-[4px] parents-id text-red-500 bg-[white] text-[10px] font-[700] px-[7px] py-[4px] rounded-[4px] leading-none tracking-[0.5px]">
              {studentId}
            </span>
            <h2 className="text-white text-[18px] font-[600]">{studentName}</h2>

            <span className="text-[#CDD0D7] flex gap-[5px]">
              <p className="border-white block">
                Class : {studentClass}, {studentSection}
              </p>
              <span>Roll no: {studentRoll}</span>
            </span>
          </div>
        </div>

        <div className="card-footer text-white pt-[20px] border-t border-dotted flex justify-between items-center">
          <div className="flex gap-[10px]">
            <span>1st Quaterly</span>
            <span className="badge px-[7px] py-[2px] bg-[#1ABE17] flex flex-grow-0 items-center gap-[5px] rounded-[4px] text-[10px] font-semibold">
              <IconCircleFilled
                stroke={1}
                height={6}
                width={6}
                color="white"
                className="align-baseline"
              />
              Pass
            </span>
          </div>
          <Link
            to="/edit-profile"
            className="px-[12px] py-[8px] bg-red-600 rounded-[5px]"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudentDetailCard;
