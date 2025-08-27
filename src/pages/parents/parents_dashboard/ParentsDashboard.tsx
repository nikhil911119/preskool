import React from "react";
import DashboardLayout from "../../../layout/DashboardLayout";
import ParentsDetailCard from "./ParentsDetailCard";
import ActionButton from "./ActionButton";
import {
  IconCalendar,
  IconCalendarShare,
  IconHexagonalPrismPlus,
  IconMessageUp,
} from "@tabler/icons-react";
import LeaveCard from "./LeaveCard";
import EventContainer from "./event/EventContainer";
import Statistics from "./statistics/Statistics";
import LeaveStatus from "./leave-status/LeaveStatus";
import Homework from "./homework/Homework";
import FeesReminder from "./fees-reminder/FeesReminder";
import ExamResult from "./exam-results/ExamResult";
import NoticeBoard from "../../../components/notice-board/NoticeBoard";
interface ParentDetailData {
  imageUrl: string;
  parentsId: string;
  parentsName: string;
  addedDate: Date;
  childName: string[];
}
const ParentsDashboard: React.FC = () => {
  const parentData: ParentDetailData = {
    imageUrl: "/images/avatar-01.jpg",
    parentsId: "#234535",
    parentsName: "Emily Smith",
    addedDate: new Date(),
    childName: ["Gerard", "Benedict"],
  };
  return (
    <DashboardLayout role="Parent">
      <div className="grid grid-cols-12 gap-[25px] mb-[25px]">
        {/* Parent card area */}
        <div className="col-span-5">
          <ParentsDetailCard
            imageUrl={parentData.imageUrl}
            parentsId={parentData.parentsId}
            parentsName={parentData.parentsName}
            addedDate={parentData.addedDate}
            childName={parentData.childName}
          />
        </div>
        <div className="col-span-7 flex justify-between items-center">
          <div className="grid grid-cols-12 gap-[20px] w-[100%]">
            <div className="col-span-4 flex flex-col justify-between">
              <ActionButton
                icon={<IconCalendar stroke={2} height={15} width={15} />}
                label="Apply Leave"
                key={1}
              />
              <ActionButton
                icon={<IconMessageUp stroke={2} height={15} width={15} />}
                label="Raise A Request"
                key={2}
              />
            </div>

            <div className="col-span-4">
              <LeaveCard
                icon={
                  <IconCalendarShare
                    stroke={3}
                    height={15}
                    width={15}
                    color="white"
                  />
                }
                label={"Medical Leaves" + `\n` + "(10/20)"}
                iconbg={"#1ABE17"}
                used={10}
                avaliable={20}
                cardbg="#E8F9E8"
              />
            </div>
            <div className="col-span-4">
              <LeaveCard
                icon={
                  <IconHexagonalPrismPlus
                    stroke={3}
                    height={15}
                    width={15}
                    color="white"
                  />
                }
                label={"Casual Leaves" + `\n` + "(10/20)"}
                iconbg={"#DC2626"}
                used={10}
                avaliable={20}
                cardbg="#F2F5FF"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[25px] mb-[25px]">
        <div className="col-span-4">
          <EventContainer />
        </div>
        <div className="col-span-8">
          <Statistics />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-[25px] mb-[25px]">
        <div className="col-span-4">
          <LeaveStatus />
        </div>
        <div className="col-span-4">
          <Homework />
        </div>
        <div className="col-span-4">
          <FeesReminder />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-[25px]">
        <div className="col-span-8">
          <ExamResult />
        </div>
        <div className="col-span-4">
          <NoticeBoard />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ParentsDashboard;
