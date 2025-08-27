import React from "react";
import { IconArrowBadgeDown, IconArrowBadgeUp } from "@tabler/icons-react";

interface CategoryData {
  title: string;
  figure: number;
}

interface EachCategoryProps {
  grade: string;
  category: CategoryData[];
}

const EachCategory: React.FC<EachCategoryProps> = ({ grade, category }) => {
  return (
    <div className="performance-category p-4 border rounded-lg shadow-md bg-white">
      {/* Grade Name */}
      <h3 className="text-lg font-semibold text-[#202C4B] mb-2">{grade}</h3>

      {/* Performance Stats */}
      <div className="space-y-2">
        {category.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 font-medium"
            style={{
              color:
                item.title === "Top Performers"
                  ? "green"
                  : item.title === "Average Performers"
                  ? "goldenrod"
                  : "red",
            }}
          >
            {item.title === "Top Performers" ? (
              <IconArrowBadgeUp stroke={1.5} size={20} />
            ) : (
              <IconArrowBadgeDown stroke={1.5} size={20} />
            )}
            <span>{item.title}: {item.figure}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EachCategory;
