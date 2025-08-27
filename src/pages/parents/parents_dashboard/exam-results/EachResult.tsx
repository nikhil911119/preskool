import { ClassNames } from "@emotion/react";
import React from "react";

type Props = {
  studentId: string;
  studentName: string;
  image: string;
  section: string;
  examType: string;
  marks: number;
  status: "Pass" | "Fail";
  studentClass: string;
};

const EachResult: React.FC<Props> = ({
  studentId,
  studentName,
  image,
  section,
  examType,
  marks,
  status,
  studentClass,
}: Props) => {


  return (
    <>
      <tr>
        <td>{studentId}</td>
        <td>
          <div className=" flex items-center gap-[5px]">
            <img
              src={image}
              alt={studentName}
              className="h-[30px] w-[30px] rounded-full"
            />
            <span>{studentName}</span>
          </div>
        </td>
        <td>{studentClass}</td>
        <td>{section}</td>
        <td>{marks}%</td>
        <td>{examType}</td>
        <td>
          <span
            className="px-[7px] py-[4px] text-white rounded-[5px] text-[10px] font-semibold"
            style={
              status === "Pass"
                ? { backgroundColor: "#1ABE17" }
                : { backgroundColor: "#E82646" }
            }
          >
            {status}
          </span>
        </td>
      </tr>
    </>
  );
};

export default EachResult;
