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
  const filteredData = props.topic.filter((item) => item.title === "Absent");
  const ChartData = filteredData.map((data) => data.figure);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    labels: ["Present", "Absent"],
    legend: {
      show: false, // Disable the legend
    },
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
  const chartSeries: number[] = [100 - ChartData[0], ...ChartData];

  return (
    <div className="donut-chart-container py-[20px] flex justify-center items-center">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width="250" // Set larger width
        height="250" // Set larger height
        className="donut-chart"
        
      />
    </div>
  );
};

export default DonutChart;
