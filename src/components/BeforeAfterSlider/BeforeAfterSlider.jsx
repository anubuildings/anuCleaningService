import React from "react";
import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = ({ before, after, start = 0.5 }) => {
  return (
    <>
      <div className="image-comparison-container">
      <ReactCompareImage
        leftImage={before}
        rightImage={after}
        sliderPositionPercentage={start}
        aspectRatio="wider" 
      />
      </div>
    </>
  );
};

export default BeforeAfterSlider;
