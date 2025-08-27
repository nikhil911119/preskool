import React from "react";
import DropMenu from "../../../../components/dropdown/DropMenu";
import ToDoData from "../../../../constants/admin-dashboard-data/ToDoData";
import EachToDo from "./EachToDo";

type Props = {};

const ToDoContainer: React.FC = (props: Props) => {
  const dropdownData: string[] = [
    "Today",
    "This Week",
    "This Month",
    "This Year",
  ];
  return (
    <>
      <div className="todo-container shadow-custom border rounded-[5px]">
        <div className="card-heading flex justify-between items-center p-[20px]">
          <h2 className="text-[18px]  font-[600] text-[#202C4B]">Todo</h2>
          <DropMenu data={dropdownData} defaultLabel={dropdownData[0]} />
        </div>
        <ul className="card-body p-[20px]">
          {ToDoData.map((data, index) => (
            <EachToDo
              key={index}
              toDoId={data.toDoId}
              todoTitle={data.todoTitle}
              todoName={data.todoName}
              deathLineDate={data.deathLineDate}
              deathLineTime={data.deathLineTime}
              status={data.status}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDoContainer;
