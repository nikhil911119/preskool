import React from "react";

type Props = {
  icon: React.ReactElement;
  label: string;
  iconbg: string;
  cardbg?: string;
  used: number;
  avaliable: number;
};

const LeaveCard: React.FC<Props> = ({
  icon,
  label,
  iconbg,
  cardbg,
  used,
  avaliable,
}: Props) => {
  return (
    <div
      className="card p-[16px] border-white border-[3px] shadow-custom rounded-[5px]"
      style={{ backgroundColor: cardbg }}
    >
      <div
        className="icon-wrapper h-[25px] w-[25px] flex justify-center items-center mb-[16px] mx-[auto] rounded-[5px]"
        style={{ backgroundColor: iconbg }}
      >
        {icon}
      </div>
      <h2 className="text-[15px] font-[500] text-center mb-[6px]">{label}</h2>
      <div className="data flex justify-between text-[#6A7287]">
        <span>Used: {used}</span>
        <span>Used: {avaliable}</span>
      </div>
    </div>
  );
};

export default LeaveCard;
