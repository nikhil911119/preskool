import React from "react";
import { IconChevronDown } from "@tabler/icons-react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import DropMenu from "../../../../components/dropdown/DropMenu";

type PerformanceData = {
  top: number;
  average: number;
  belowAvg: number;
};

type PerformanceSummaryProps = {
  title: string;
  data: PerformanceData;
  className?: string;
};

const COLORS: string[] = ["#3366FF", "#FFCC00", "#FF3333"];

const PerformanceSummary: React.FC<PerformanceSummaryProps> = ({
  title,
  data,
  className,
}) => {
  const chartOptions: ApexOptions = {
    chart: { type: "donut" as "donut" },
    colors: COLORS,
    labels: ["Top", "Average", "Below Avg"],
    legend: { show: false },
    dataLabels: { enabled: false },
  };

  const chartSeries: number[] = [data.top, data.average, data.belowAvg];
  const dropdownData = ["Class 1", "Class 2", "Class 3"];
  return (
    <div className={`border rounded-lg p-4 ${className || ""}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <DropMenu data={dropdownData} defaultLabel="Class 1" />
      </div>
      <div className="flex justify-between me-7">
        <div className="space-y-2">
          {["Top", "Average", "Below Avg"].map((name, index) => (
            <div key={name} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="text-sm font-medium">{name}</span>
              <span className="text-sm font-bold">{chartSeries[index]}</span>
            </div>
          ))}
        </div>
        <div className="w-24 h-24">
          <ApexCharts
            options={chartOptions}
            series={chartSeries}
            type="donut"
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceSummary;
