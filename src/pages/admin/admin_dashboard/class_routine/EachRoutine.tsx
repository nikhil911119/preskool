import React from "react";
type Props = {
  imageUrl: string;
  date: string;

  teacherName?: string;
  grade: string;
  progressBar: string;
};

const EachRoutine: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div className="each-routine flex p-[10px] gap-4 items-end">
        <img
          src={props.imageUrl}
          alt=""
          className="aspect-square w-[30px] rounded-[4px]"
        />

        <div className="w-[100%]">
          <span className="date text-gray-500 block mb-2">{props.date}</span>
          <div className="progress-bar  bg-[#E9EDF4]">
            <div
              className={`completed ${props.progressBar} h-[4px] bg-[red] rounded-md`}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EachRoutine;
