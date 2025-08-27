interface ToDoDataProps {
  toDoId: string;
  todoTitle: string;
  todoName: string;
  deathLineDate: Date;
  deathLineTime: string;
  status: "Completed" | "On Progress" | "Yet to Start";
}
const ToDoData: ToDoDataProps[] = [
  {
    toDoId: "1",
    todoTitle: "Send Reminder to Student",
    todoName: "task2",
    deathLineDate: new Date("2023-01-01"),
    deathLineTime: "10:00 AM",
    status: "Completed",
  },
  {
    toDoId: "2",
    todoTitle: "Create Routine to new staff",
    todoName: "task2",
    deathLineDate: new Date("2023-01-02"),
    deathLineTime: "10:00 AM",
    status: "On Progress",
  },
  {
    toDoId: "3",
    todoTitle: "Assignment 3",
    todoName: "task3",
    deathLineDate: new Date("2023-01-03"),
    deathLineTime: "10:00 AM",
    status: "Yet to Start",
  },
  {
    toDoId: "4",
    todoTitle: "Assignment 3",
    todoName: "task4",
    deathLineDate: new Date("2023-01-03"),
    deathLineTime: "10:00 AM",
    status: "Yet to Start",
  },
];

export default ToDoData;
export type { ToDoDataProps };
