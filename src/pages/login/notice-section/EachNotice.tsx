import React from "react";

type Props = {
  title: string;
  discription: string;
};

const EachNotice = ({ title, discription }: Props) => {
  return (
    <>
      <div className="each-notice p-[16px] bg-white rounded-[5px] mb-[10px] last:mb-0">
        <div className="details ">
          <h3 className="title text-[15px] font-[500] mb-0">{title}</h3>
          <p className="discription text-[#6A7287]">{discription}</p>
        </div>
      </div>
    </>
  );
};

export default EachNotice;
