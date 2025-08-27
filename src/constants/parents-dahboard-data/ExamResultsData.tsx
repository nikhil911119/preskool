interface ExamResultsData {
  studentId: string;
  studentName: string;
  image: string;
  section: string;
  examType: "Quaterly" | "Practical" | "1st Term";
  marks: number;
  status: "Pass" | "Fail";
  studentClass: string;
}

const ExamResultsData: ExamResultsData[] = [
  {
    studentName: "Janet",
    studentId: "12212",
    image: "/images/student-01.jpg",
    section: "B",
    examType: "Quaterly",
    marks: 88,
    status: "Pass",
    studentClass: "I",
  },
];

export default ExamResultsData;
