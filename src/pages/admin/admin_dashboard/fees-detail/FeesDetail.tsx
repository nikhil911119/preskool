import React from "react";
import FeesDetailData from "../../../../constants/admin-dashboard-data/FeesDetailData";
import EachFeesDetailCard from "./EachFeesDetailCard";

const FeesDetail: React.FC = () => {
  return (
    <div className="fees-details flex gap-[10px] flex-col">
      {FeesDetailData.map((data, index) => (
        <EachFeesDetailCard
          title={data.title}
          amount={data.amount}
          percentageCollection={data.percentageCollection}
          key={index}
          color={data.color}
        />
      ))}
    </div>
  );
};

export default FeesDetail;
