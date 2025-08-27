interface LeaveRequestDataProps {
  imageUrl: string;
  leaveDuration: string;
  ApplicantName: string;
  position: string;
  applyDate: Date;
  priority: "Emergency" | "Casual";
}
const LeaveRequestData: LeaveRequestDataProps[] = [
  {
    imageUrl: "/images/avatar-14.jpg",
    leaveDuration: "1 day",
    ApplicantName: "John Doe",
    position: "Physics Teacher",
    applyDate: new Date(),
    priority: "Emergency",
  },
  {
    imageUrl: "/images/avatar-01.jpg",
    leaveDuration: "1 day",
    ApplicantName: "Ramien Doe",
    position: "Maths Teacher",
    applyDate: new Date(),
    priority: "Casual",
  },
];
export default LeaveRequestData;
