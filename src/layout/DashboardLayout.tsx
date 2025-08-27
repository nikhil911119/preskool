import React from "react";
import { Link } from "react-router-dom";

interface BaseLayoutProps {
  children: React.ReactNode;
  role: "Parent" | "Student" | "Admin" | "Teacher";
}

interface Child {
  childname: string;
  class: string;
  section: string;
  grade: string;
  childImage: string;
  id: number; // Added ID for identification
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, role }) => {
  const childrenList: Child[] = [
    {
      id: 1,
      childname: "John Doe",
      class: "Class 1",
      section: "A",
      grade: "Grade 1",
      childImage: "/images/avatar-01.jpg",
    },
    {
      id: 2,
      childname: "Jane Doe",
      class: "Class 2",
      section: "B",
      grade: "Grade 2",
      childImage: "/images/avatar-14.jpg",
    },
  ];

  const handleClick = () => {};

  return (
    <div className="base-layout ml-[260px] pt-[56px]">
      <div className="content p-[20px]">
        <div className="page-top flex justify-between items-center mb-[20px]">
          <div className="heading">
            <h1 className="font-bold text-[20px]">{role} Dashboard</h1>
            <p className="text-gray-600">Dashboard / {role} Dashboard</p>
          </div>
          {role === "Admin" && (
            <div className="button-wrapper mt-4 mb-6 flex gap-[10px]">
              <Link
                to="/add-new-item"
                className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition font-semibold"
                aria-label={`Add new item for ${role}`}
              >
                Add New Item
              </Link>
              <Link
                className="px-4 py-2 bg-transparent border  text-gray-500 rounded shadow  transition font-semibold"
                aria-label={`Add new item for ${role}`}
                to={"fees-detail"}
              >
                Add New Item
              </Link>
            </div>
          )}
          {role === "Parent" && (
            <div className="button-wrapper flex gap-[10px] items-center">
              <h2 className="text-[14px] font-[500]">Select Student </h2>
              {childrenList.map((child, index) => (
                <button
                  onClick={() => handleClick()}
                  className="p-[4px] border border-blue-700 rounded-[5px]"
                  key={index}
                >
                  <img
                    src={child.childImage}
                    alt={child.childname}
                    className="w-[30px] h-[30px]"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default BaseLayout;
