import React from "react";
import Chart from "react-apexcharts";

interface topicProps {
  title: string;
  figure: number;
}
type Props = {
  topic: topicProps[];
};

const DonutChart: React.FC<Props> = (props: Props) => {
  const Data = props.topic;
  const ChartTopics = Data.map((data) => data.title);
  const ChartData = Data.map((data) => data.figure);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ChartTopics,
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    colors: ["#AA1632", "#1ABE17", "#1170E4", "#E9EDF4"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 400, // Adjust the size for smaller screens
            height: 400,
          },
        },
      },
    ],
  };

  // Larger series data for visualization
  const chartSeries: number[] = ChartData;

  return (
    <div className="donut-chart-container py-[20px] flex justify-center items-center">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="100%"
        height="250"
        className="donut-chart"
      />
    </div>
  );
};

export default DonutChart;
