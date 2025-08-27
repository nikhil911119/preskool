import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AttendanceDetail from "./AttendanceDetail";
import category from "./CategoryData";
import DonutChart from "./DonutChart";
import { useState } from "react";
import TabPanel from "../../../../components/CustomTabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", padding: "0" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", padding: "0" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {category.map((data, categoryIndex) => (
            <Tab
              key={categoryIndex}
              label={data.categoryType}
              {...a11yProps(categoryIndex)}
            />
          ))}
        </Tabs>
      </Box>
      {category.map((data, categoryIndex) => (
        <TabPanel value={value} index={categoryIndex} key={categoryIndex}>
          <div className="columns-3">
            {data.topic.map((topic, topicIndex) => (
              <div key={`${categoryIndex}-${topicIndex}`}>
                <AttendanceDetail topic={topic} figure={topic.figure} />
              </div>
            ))}
          </div>
          <DonutChart topic={data.topic} />
        </TabPanel>
      ))}
    </Box>
  );
}
