import React from "react";
import Chart from "react-apexcharts";
type Props = {};

const LineGraph: React.FC<Props> = ({}: Props) => {
  const categoriesTitle = [];
  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      id: "basic-bar",
      type: "line",
      toolbar: {
        show: false,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
    },

    xaxis: {
      categories: [],
    },
  };
  const chartSeries = [
    {
      name: "Average Attendance",
      data: [],
    },
    {
      name: "Average Exam Score",
      data: [],
    },
  ];
  return (
    <>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        width="100%"
        height={313}
      />
    </>
  );
};

export default LineGraph;
