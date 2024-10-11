import React from "react";
import ReactCompareImage from "react-compare-image";

const BeforeAfterSlider = ({ before, after, start = 0.5 }) => {
  return (
    <>
      <div className="image-comparison-container">
      <ReactCompareImage
      className="imgm"
       leftImage={before}
       rightImage={after}
       aspectRatio="wider" // Optimized aspect ratio
       lazyLoad={true}
       vertical={false} // Horizontal drag
      />
      </div>
    </>
  );
};

export default BeforeAfterSlider;
