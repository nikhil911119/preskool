import ReactApexChart from "react-apexcharts";
import "./finance.css";

type Props = {
  title: string;
  amount: number;
  color: string;
  data: number[];
};

const FinanceCardChart: React.FC<Props> = ({
  title,
  amount,
  color,
  data,
}: Props) => {
  const series = [
    {
      name: "Earnings",
      data: data,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    colors: [color],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    series: [
      {
        name: "Earnings",
        data: [40, 20, 60, 55, 50, 55, 40],
      },
    ],
  };

  return (
    <div className="finance-card shadow-custom border rounded-[5px] flex flex-col">
      {/* Content section with padding */}
      <div className="description p-[25px]">
        <h2 className="title text-[15px] font-bold">{title}</h2>
        <span className="amount text-[24px] font-[700]">
          ${amount.toLocaleString()}
        </span>
      </div>

      {/* Chart section that fills the remaining space */}
      <div className="chart-container w-full flex-grow">
        {" "}
        {/* Ensures full height for the chart */}
        <ReactApexChart
          type="area"
          series={series}
          options={options}
          
          height="100%"
        
        />
      </div>
    </div>
  );
};

export default FinanceCardChart;
