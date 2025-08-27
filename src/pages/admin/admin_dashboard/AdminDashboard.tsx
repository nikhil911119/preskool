import DashboardLayout from "../../../layout/DashboardLayout";
import SchoolData from "./SchoolData.json";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { IconSquarePlus } from "@tabler/icons-react";
import BestStudentSlider from "./slider/BestStudentSlider";
import EachDetailCard from "./EachDetailCard";
import EventContainer from "./coming_events/EventContainer";
import AttendanceContainer from "./Attendance/AttendanceContainer";
import QuickLinks from "./quicklinks/QuickLinks";
import ClassRoutine from "./class_routine/ClassRoutine";
import TeacherPerformanceSlider from "./slider/TeacherPerformanceSlider";
import FeeCollection from "./fee_collection/FeeCollection";
import LeaveRequest from "./leave_request/LeaveRequest";
import FeaturesContainer from "./Features/FeaturesContainer";
import FinanceCardChart from "./finance/FinanceCardChart";
import NoticeBoard from "../../../components/notice-board/NoticeBoard";
import FeesDetail from "./fees-detail/FeesDetail";
import TopSubjects from "./top-subjects/TopSubjects";
import StudentActivity from "./student-activities/StudentActivity";
import ToDoContainer from "./to-do/ToDoContainer";
import Performance from "./performance/Performance";

const currentDate = new Date();
const AdminDashboard = () => {
  const name = "Mr. Herald";
  const date = new Date();

  return (
    <DashboardLayout role="Admin">
      {/* Greeting Section */}
      <div className="p-5 bg-[#202C4B] text-white rounded-md relative mb-8">
        <h2 className="text-2xl font-bold">Welcome Back, {name}</h2>
        <p>Have a good day at work!</p>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm">
          Updated Recently On {currentDate.toDateString()}
        </span>
      </div>

      {/* School Details Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {SchoolData.map((data) => (
          <div key={data.id}>
            <EachDetailCard {...data} />
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-7">
        {/* Left Section: Calendar */}
        <div className="shadow-lg p-4 rounded-lg bg-white">
          <div className="flex items-center justify-between text-red-600 font-semibold mb-3">
            <h2 className="text-lg text-[#202C4B]">Schedules</h2>
            <button className="flex items-center gap-1">
              <IconSquarePlus stroke={2} size={18} />
              Add new
            </button>
          </div>
          <Calendar value={date} className="border-none mb-5" />
          <EventContainer />
        </div>

        {/* Center Section: Attendance & Performance */}
        <div className="flex flex-col gap-6">
          <AttendanceContainer />

          <div className="slider-group flex gap-[25px] overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <TeacherPerformanceSlider />
            </div>
            <div className="flex-1 overflow-hidden">
              <BestStudentSlider />
            </div>
          </div>
        </div>

        {/* Right Section: Quick Links & Class Routine */}
        <div className="flex flex-col gap-6">
          <QuickLinks />
          <ClassRoutine />
          <Performance
            title={"Performance"}
            data={{
              top: 10,
              average: 21,
              belowAvg: 11,
            }}
          />
        </div>
      </div>

      {/* Fee Collection & Leave Request */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <div className="flex-1">
          <FeeCollection />
        </div>
        <div className="flex-1">
          <LeaveRequest />
        </div>
      </div>

      <FeaturesContainer />

      {/* Finance, Notice Board, Fees Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Finance Section */}
        <div className="flex flex-col gap-6">
          <FinanceCardChart
            amount={100000}
            title="Total Earnings"
            color="#E82646"
            data={[60, 40, 50, 45, 20]}
          />
          <FinanceCardChart
            amount={20000}
            title="Total Expenses"
            color="#3D5EE1"
            data={[40, 20, 25, 30, 50]}
          />
        </div>

        {/* Notice Board */}
        <div className="flex flex-col gap-6">
          <NoticeBoard />
        </div>

        {/* Fees Detail */}
        <div className="flex flex-col gap-6">
          <FeesDetail />
        </div>
      </div>

      {/* Top Subjects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TopSubjects />
        <StudentActivity />
        <ToDoContainer />
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
