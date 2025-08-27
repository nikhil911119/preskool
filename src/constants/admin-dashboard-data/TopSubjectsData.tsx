interface TopSubjectsDataProps {
  subjectName: string;
  progressPercentage: number;
  color: string;
}
const TopSubjectsData: TopSubjectsDataProps[] = [
  {
    subjectName: "English",
    progressPercentage: 80,
    color: "bg-[#1ABE17]",
  },
  {
    subjectName: "Maths",
    progressPercentage: 60,
    color: "bg-[#E82646]",
  },
  {
    subjectName: "Science",
    progressPercentage: 90,
    color: "bg-[#EAB300]",
  },
  {
    subjectName: "Biology",
    progressPercentage: 40,
    color: "bg-[#EAB300]",
  },
  {
    subjectName: "Physics",
    progressPercentage: 60,
    color: "bg-[#6FCCD8]",
  },
  {
    subjectName: "Computer Science",
    progressPercentage: 70,
    color: "bg-[#E82646]",
  },
];

export default TopSubjectsData;
