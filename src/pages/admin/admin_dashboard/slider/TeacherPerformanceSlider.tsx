import React from "react";
import Slider from "../../../../components/slider/Slider"; // Correct import for the Slider component
import BestTeacherData from "../../../../constants/admin-dashboard-data/BestTeacherSliderData"; // Import the slider data


// Change the type of PerformanceSlider to accept an array of SliderType
const TeacherPerformanceSlider: React.FC = () => {
  return <Slider slides={BestTeacherData} backgroundColor="#48CB45"/>; // Pass BestTeacherData as the slides prop
};

export default TeacherPerformanceSlider;
