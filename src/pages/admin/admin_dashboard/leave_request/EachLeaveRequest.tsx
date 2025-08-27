import { Badge } from "@mui/material";
import { IconChecks, IconX } from "@tabler/icons-react";
import React from "react";

type Props = {
  imageUrl?: string;
  leaveDuration: string;
  ApplicantName: string;
  position: string;
  applyDate: Date;
  priority: "Emergency" | "Casual";
};

const EachLeaveRequest: React.FC<Props> = ({
  ApplicantName,
  position,
  imageUrl,
  applyDate,
  leaveDuration,
  priority,
}: Props) => {
  const handleApprove = () => {};
  const handleReject = () => {};
  // Determine the badge based on priority
  const getPriorityBadge = () => {
    if (priority === "Emergency") {
      return (
        <span className="py-[4px] px-[6px] rounded-md bg-[#E8264619] text-[#E82646] text-[12px] font-bold ms-2">
          Emergency
        </span>
      );
    }
    if (priority === "Casual") {
      return (
        <span className="py-[4px] px-[6px] rounded-md ms-2 bg-[#FDF7E5] text-[#EAB52A] text-[12px] font-bold">
          Casual
        </span>
      );
    }
    return null;
  };

  return (
    <div className="each-leave-request p-[15px] shadow-custom rounded-md border mb-[10px]">
      <div className="flex pb-6 border-b-2 justify-between">
        <div className="left flex gap-4 ">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Applicant"
              className="w-[45px] aspect-square rounded-[4px]"
            />
          )}
          <div className="applicant-details">
            <div className="mb-1">
              <span className="name inline-block">
                {ApplicantName}
                {getPriorityBadge()}
              </span>
            </div>
            <span className="position block text-[#6A7287]">{position}</span>
          </div>
        </div>
        <div className="right flex gap-2 buttons-group">
          <button onClick={handleApprove}>
            <IconChecks
              stroke={2}
              size={12}
              className="bg-[#1ABE17] h-[18px] w-[18px] text-white rounded-[5px]"
            />
          </button>
          <button onClick={handleReject}>
            <IconX
              stroke={2}
              size={12}
              className="bg-[#E82646] h-[18px] w-[18px] text-white rounded-[5px]"
            />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center pt-3">
        <span className="inline-block text-[#6A7287]">
          Leave:{" "}
          <span className="text-[#6A7287] font-bold">{leaveDuration}</span>
        </span>
        <span className="inline-block text-[#6A7287] ">
          ApplyOn:
          <span className="font-bold"> {applyDate.toLocaleDateString()}</span>
        </span>
      </div>
    </div>
  );
};

export default EachLeaveRequest;
