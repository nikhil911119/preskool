import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { SliderType } from "../../types/SliderTypes"; // Correct import for SliderType

interface ProductSliderProps {
  slides: SliderType[]; // Accept an array of SliderType objects
  backgroundColor: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  slides,
  backgroundColor,
}) => {
  return (
    <div className="relative w-full mx-auto rounded-[5px]">
      <Swiper
        spaceBetween={10} // space between slides
        slidesPerView={1} // Ensure only 1 slide is visible at a time
        loop={true} // enable looping
        autoplay={{ delay: 3000 }} // auto-slide after 3 seconds
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                backgroundColor: { backgroundColor },
                color: "white",
                textAlign: "center",
                padding: 0,
              }}
            >
              <CardContent className="p-[0]">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  lineHeight={1}
                  fontSize={16}
                  marginBottom={"10px"}
                  color="white"
                >
                  {slide.sliderTitle}
                </Typography>
                <Typography variant="body2" fontSize={18} fontWeight={600}>{slide.performerName}</Typography>
                <Typography variant="body2">{slide.position}</Typography>
                <CardMedia
                  component="img"
                  alt={slide.performerName}
                  image={slide.performerImageUrl}
                  sx={{
                    width: "80%",
                    margin: "20px auto",
                    marginTop: "90px",
                    mb: "-25px",
                    height: "100%", // Set to 'auto' for better image responsiveness
                  }}
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
