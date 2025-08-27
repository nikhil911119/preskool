import React from "react";
import Chart from "react-apexcharts";
type Props = {
  avgExamScore: number[];
  avgAttendance: number[];
};

const LineGraph: React.FC<Props> = ({ avgAttendance, avgExamScore }: Props) => {
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
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
  };

  const chartSeries = [
    {
      name: "Average Attendance",
      data: avgAttendance,
    },
    {
      name: "Average Exam Score",
      data: avgExamScore,
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
