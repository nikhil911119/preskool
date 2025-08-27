interface HomeWorkDataProps {
  imageUrl: string;
  subject: string;
  dueDate: Date;
  teacherName: string;
  teacherImageUrl: string;
  title: string;
}

const HomeWorkData: HomeWorkDataProps[] = [
  {
    imageUrl: "/images/home-work-01.jpg",
    subject: "Maths",
    dueDate: new Date(),
    teacherName: "John Doe",
    teacherImageUrl: "/images/teacher-01.jpg",
    title: "Write about theory of Pendumum",
  },
  {
    imageUrl: "images/home-work-02.jpg",
    subject: "Maths",
    dueDate: new Date(),
    teacherName: "John Doe",
    teacherImageUrl: "/images/teacher-01.jpg",
    title: "Chemistry: Change of Elements",
  },
  {
    imageUrl: "images/home-work-03.jpg",
    subject: "Maths",
    dueDate: new Date(),
    teacherName: "John Doe",
    teacherImageUrl: "/images/teacher-01.jpg",
    title: "Maths - Problems to Solve Page 21",
  },
  {
    imageUrl: "images/home-work-04.jpg",
    subject: "Maths",
    dueDate: new Date(),
    teacherName: "John Doe",
    teacherImageUrl: "/images/teacher-01.jpg",
    title: "Maths - Problems to Solve Page 21",
  },
];

export default HomeWorkData;
