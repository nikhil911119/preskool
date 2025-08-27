import React from "react";
import Slider from "../../../../components/slider/Slider"; // Correct import for the Slider component
import BestStudentData from "../../../../constants/admin-dashboard-data/BestStudentSliderData";

// Change the type of PerformanceSlider to accept an array of SliderType
const BestStudentSlider: React.FC = () => {
  return <Slider slides={BestStudentData} backgroundColor="#0F65CD" />; // Pass BestTeacherData as the slides prop
};

export default BestStudentSlider;
