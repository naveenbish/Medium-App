import { default as Slider, Settings } from "react-slick";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default function SimpleSlider() {

  const settings: Settings = {
    // arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div className="cursor-pointer"
        onClick={next}
      >
        <ArrowRight />
      </div>
    </div>
  );
}
