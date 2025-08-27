import { colors } from "@mui/material";
import { IconUserEdit } from "@tabler/icons-react";
import React from "react";

interface eventDataTypes {
  priority?: string;
  title: string;
  date: string;
  time: string;
  color: string;
  icon: React.ReactElement;
}
const eventData: eventDataTypes[] = [
  {
    title: "Parents Teachers Meeting",
    date: "15 July 2024",
    time: "10am - 11am",
    color: "",
    icon: <IconUserEdit stroke={2} />,
  },
  {
    title: "Parents Teachers Meeting",
    date: "15 July 2024",
    time: "10am - 11am",
    color: "",
    icon: <IconUserEdit stroke={2} />,
  },
  {
    title: "Parents Teachers Meeting",
    date: "15 July 2024",
    time: "10am - 11am",
    color: "",
    icon: <IconUserEdit stroke={2} />,
  },
];
export default eventData;
