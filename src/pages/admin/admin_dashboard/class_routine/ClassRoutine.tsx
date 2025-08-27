import React from "react";
import RoutineData from "./RoutineData";
import EachRoutine from "./EachRoutine";

const ClassRoutine: React.FC = () => {
  return (
    <>
      <div className="class-routine shadow-custom mb-7 p-[15px] border rounded-[5px]">
        <div className="card-heading-[15px]">
          <h2 className="text-[18px] mb-4 font-[500] text-[#202C4B]">
            Class Routine
          </h2>
        </div>
        <div className="routine-container ">
          {RoutineData.map((item, index) => (
            // Place the key on EachRoutine directly
            <EachRoutine
              imageUrl={item.imageUrl}
              date={item.date}
              grade={item.grade}
              key={index} // Key should be here
              progressBar={item.progressBar}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ClassRoutine;
