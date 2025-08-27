import { IconChevronRight } from "@tabler/icons-react";
import React from "react";

type Props = {
  label: string;
  icon: React.ReactElement;
};

const ActionButton: React.FC<Props> = ({ label, icon }: Props) => {
  return (
    <button className="flex justify-between items-center w-full p-[16px] border">
      <span className="left flex gap-[10px] items-center font-semibold text-[15px] text-[#F202C4B]">
        {icon}
        {label}
      </span>
      <IconChevronRight stroke={2} height={"15px"} />
    </button>
  );
};

export default ActionButton;
