interface EachDetailCardProps {
  title: string;
  amount: number;
  percentageCollection: number;
  color: string;
}
const FeesDetailData: EachDetailCardProps[] = [
  {
    title: "Total Fees Collected",
    amount: 10000,
    percentageCollection: 0,
    color: "#1ABE17",
  },
  {
    title: "Fine Collected till date",
    amount: 2220,
    percentageCollection: 0,
    color: "#DC2626",
  },
  {
    title: "Pending Fees",
    amount: 11220,
    percentageCollection: 0,
    color: "#EAB300",
  },
  {
    title: "Pending Fees",
    amount: 342340,
    percentageCollection: 0,
    color: "#6FCCD8",
  },
];
export default FeesDetailData;
export type { EachDetailCardProps };
