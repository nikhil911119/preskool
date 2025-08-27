import React from "react";
import { EachDetailCardProps } from "../../../../constants/admin-dashboard-data/FeesDetailData";
import { IconChartLine } from "@tabler/icons-react";

const EachFeesDetailCard: React.FC<EachDetailCardProps> = ({
  title,
  amount,
  percentageCollection,
  color,
}: EachDetailCardProps) => {
  return (
    <div className="detail-card p-[25px] shadow-custom border rounded-[5px] ">
      <h3>{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-[18px] font-[600] text-[#202C4B]">
          ${amount.toLocaleString()}
        </span>
        <span
  className="text-[10px] flex gap-1 px-2 py-1 rounded"
  style={{ backgroundColor: `${color}1a` }}
>
  <IconChartLine stroke={2} height={15} width={15} color={color} />
  {percentageCollection}%
</span>
      </div>
    </div>
  );
};

export default EachFeesDetailCard;
