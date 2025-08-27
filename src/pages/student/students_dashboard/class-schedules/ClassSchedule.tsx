import React, { useState } from "react";
import { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EachSchedule from "./EachSchedule";

const ClassSchedule: React.FC = () => {
  const classScheduleData = [
    {
      teacherImageUrl: "/images/teacher-01.jpg",
      subject: "Maths",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      teacherImageUrl: "/images/teacher-02.jpg",
      subject: "Maths",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
    {
      teacherImageUrl: "/images/teacher-03.jpg",
      subject: "Maths",
      startTime: "9:00 AM",
      endTime: "10:00 AM",
    },
  ];
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <div className=" card border shadow-custom">
      <div className="card-heading flex justify-between items-center p-[20px]">
        <h2 className="text-[18px] font-[500] text-[#202C4B]">
          Today's Classes
        </h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select a date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{ padding: 0, textDecoration: "none" }}
            slotProps={{
              textField: {
                variant: "standard",

                label: "",
                sx: {
                  "& .MuiInputBase-root": {
                    borderRadius: "12px",
                    border: "none",
                    backgroundColor: "transparent",
                    width: 150,
                  },
                  "& .css-5h82ro-MuiInputBase-root-MuiInput-root::before ": {
                    border: "none",
                  },
                  "& .MuiIconButton-sizeMedium": {
                    padding: 0,
                    paddingRight: "8px",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
      </div>

      <ol className="card-body p-[16px] border-t">
        {classScheduleData.map((data, index) => (
          <EachSchedule
            key={index}
            teacherImageUrl={data.teacherImageUrl}
            subject={data.subject}
            startTime={data.startTime}
            endTime={data.endTime}
          />
        ))}
      </ol>
    </div>
  );
};

export default ClassSchedule;
