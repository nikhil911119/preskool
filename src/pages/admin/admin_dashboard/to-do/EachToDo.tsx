import React, { useRef } from "react";
import "./todo.css";
import { ToDoDataProps } from "../../../../constants/admin-dashboard-data/ToDoData";

const EachToDo: React.FC<ToDoDataProps> = ({
  deathLineDate,
  todoTitle,
  deathLineTime,
  todoName,
  toDoId,
  status,
}: ToDoDataProps) => {
  const checkBoxRef = useRef(null);
  const [StrikeText, setStrikeText] = React.useState(false);
  const handleCheck = () => {
    setStrikeText(!StrikeText);
  };

  const statusColor = () => {
    if (status == "Completed") {
      return {
        backgroundColor: "#E7F9E7",
        color: "#66C117",
      };
    }
    if (status == "On Progress") {
      return {
        backgroundColor: "#E6F9FF",
        color: "#05C8FC",
      };
    }
    if (status == "Yet to Start") {
      return {
        backgroundColor: "#FDF7E5",
        color: "#EAB300",
      };
    }
  };
  return (
    <>
      <li className="each-to-do flex justify-between items-center py-[16px]">
        <div className="flex gap-[10px]">
          <input
            type="checkbox"
            name={todoName}
            id={toDoId}
            className="p-[10px] todo-checkbox"
            ref={checkBoxRef}
            onChange={handleCheck}
          />
          <div className="details">
            <h3
              className="text-[#202C4B] font-semibold text-[15px]"
              style={{ textDecoration: StrikeText ? "line-through" : "none" }}
            >
              {todoTitle}
            </h3>
            <span className="block text-[#6A7287]">
              {deathLineDate.toDateString()} {deathLineTime}
            </span>
          </div>
        </div>
        <span
          className="px-[8px] py-[4px] rounded-[5px] text-[10px] font-[600]"
          style={statusColor()}
        >
          {status}
        </span>
      </li>
    </>
  );
};

export default EachToDo;
