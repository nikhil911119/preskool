import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import StudentDetailCard from "./StudentDetailCard";
import AttendanceContainer from "./attendance/AttendanceContainer";
import Schedule from "./schedules/Schedule";
import ClassSchedule from "./class-schedules/ClassSchedule";
import QuickLinkContainer from "./quick-links/QuickLinkContainer";
import PerformanceContainer from "./performance/PerformanceContainer";
type Props = {};
interface studentDataProps {
  imageUrl: string;
  studentId: string;
  studentName: string;
  studentClass: string;
  studentSection: string;
  studentRoll: string;
}

const StudentsDashboard: React.FC<Props> = () => {
  const studentData: studentDataProps = {
    studentId: "#1EJCJ33",
    studentName: "Angelo Rian",
    studentClass: "III",
    studentSection: "C",
    studentRoll: "36545",
    imageUrl: "/images/avatar-01.jpg",
  };

  return (
    <DashboardLayout role={"Student"}>
      <div className="grid grid-cols-12 gap-[25px] mb-[25px]">
        <div className="col-span-8">
          <div className="grid grid-cols-12 gap-[25px] mb-[25px]">
            <div className="col-span-6">
              <StudentDetailCard
                imageUrl={studentData.imageUrl}
                studentId={studentData.studentId}
                studentName={studentData.studentName}
                studentClass={studentData.studentClass}
                studentSection={studentData.studentSection}
                studentRoll={studentData.studentRoll}
                className="mb-[25px]"
              />
              <div className="col-span-6">
                <ClassSchedule />
              </div>
            </div>
            <div className="col-span-6">
              <AttendanceContainer />
            </div>
            <div className="col-span-12">
              <QuickLinkContainer />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Schedule />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[25px]">
        <div className="col-span-7">
          <PerformanceContainer />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default StudentsDashboard;
