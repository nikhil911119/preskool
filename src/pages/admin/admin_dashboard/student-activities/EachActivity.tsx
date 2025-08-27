import React from "react";

type Props = {
  title: string;
  iconUrl: string;
  desc: string;
  className?: string;
};

const EachActivity: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`each-activity p-[16px] flex gap-[10px] items-center border rounded-[5px] ${props.className}`}
    >
      <div className="icon w-[45px] h-[45px] rounded-[5px]">
        <img
          src={props.iconUrl}
          alt={`${props.title}image`}
          className="rounded-[5px]"
        />
      </div>
      <div className="details flex flex-col justify-between">
        <h3 className="text-[#202C4B] text-[15px] font-bold">{props.title}</h3>
        <p className="text-[#6A7287]">{props.desc}</p>
      </div>
    </div>
  );
};

export default EachActivity;
