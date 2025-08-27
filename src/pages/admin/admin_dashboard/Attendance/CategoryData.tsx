interface topicProps {
  title: string;
  figure: number;
}
interface categoryProps {
  categoryType: string;
  topic: topicProps[];
}

const category: categoryProps[] = [
  {
    categoryType: "Students",
    topic: [
      { title: "Emergency", figure: 0 },
      { title: "Absent", figure: 0 },
      { title: "Late", figure: 0 },
    ],
  },
  {
    categoryType: "Teachers",
    topic: [
      { title: "Emergency", figure: 20 },
      { title: "Absent", figure: 1 },
      { title: "Late", figure: 1 },
    ],
  },
  {
    categoryType: "Staff",
    topic: [
      { title: "Emergency", figure: 0 },
      { title: "Absent", figure: 0 },
      { title: "Late", figure: 0 },
    ],
  },
];
export default category;
