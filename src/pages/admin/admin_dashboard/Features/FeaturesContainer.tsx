import React from "react";
import FeaturesCard from "./FeaturesCard";
import FeaturesData from "../../../../constants/admin-dashboard-data/FeaturesData";

const FeaturesList = () => {
  return (
    <div className="grid grid-cols-4 gap-[25px] mb-[25px]">
      {FeaturesData.map((feature, index) => (
        <FeaturesCard
          key={index}
          title={feature.title}
          path={feature.path}
          icon={feature.icon} // 🔹 Pass the function, NOT calling it here
          iconbg={feature.iconbg}
          cardbg={feature.cardbg}
        />
      ))}
    </div>
  );
};

export default FeaturesList;
