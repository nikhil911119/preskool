import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts"; // Import correct types

const FeeCollectionChart: React.FC = () => {
  const options: ApexOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Q1 2024",
        "Q2 2024",
        "Q3 2024",
        "Q4 2024",
        "Q5 2024",
        "Q6 2024",
      ],
    },
    yaxis: {
      title: {
        text: "Amount ($)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val}k`,
      },
    },
    colors: ["#3D5EE1", "#E9EDF4"],

    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
    },
  };

  const series = [
    {
      name: "Total Fees",
      data: [70, 80, 90, 100, 110, 120],
    },
    {
      name: "Collected Fees",
      data: [50, 65, 80, 90, 100, 110],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height={320} />
    </div>
  );
};

export default FeeCollectionChart;
