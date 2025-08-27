import React from "react";
import EachLink from "./EachLink"; // Adjust the path as necessary
import LinkData from "./LinkData";
type Props = {};

const QuickLinks: React.FC = (props: Props) => {
  return (
    <>
      <div className="quick-links shadow-custom  p-[15px] mb-[1.5rem] border rounded-[5px]">
        <div className={`card-heading mb-[20px]`}>
          <h2 className="text-[16px] font-semibold  text-[#202C4B]">
            Quick Links
          </h2>
        </div>
        <div className="link-items grid grid-cols-3 gap-4">
          {LinkData.map((data, index) => (
            <EachLink
              icon={data.icon}
              title={data.title}
              link={data.link}
              iconbg={data.iconbg}
              iconcolor={data.iconcolor}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default QuickLinks;
