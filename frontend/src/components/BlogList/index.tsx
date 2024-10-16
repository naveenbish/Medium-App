import { Plus, ArrowRight, ArrowLeft } from "lucide-react";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateList } from '../../redux/blogListSlice';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderRef {
  slickNext: () => void;
  slickPrev: () => void;
}

const arr = ["For you", "Following", "Python", "Javascript", "Java", "React"];

const BlogList = () => {
  const [activeList, setActiveList] = useState('For you');
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveList = (value: string) => {
    setActiveList(value);
    dispatch(updateList(value));
  }

  const sliderRef = useRef<SliderRef | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
    setActiveIndex(prevIdx => prevIdx + 1);
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
    setActiveIndex(prevIdx => prevIdx - 1);
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      }, {
        breakpoint: 414,
        settings: {
          slidesToShow: 2,
        },
      },
    ]
  };

  return (
    <>
      <div className="relative bg-white p-4">
        {/* Arrow buttons */}
        <PrevButton onClick={previous} activeIdx={activeIndex} />
        <NextButton onClick={next} />

        {/* Slider */}
        <div className="slider-container px-4">
          <Slider
            ref={slider => {
              sliderRef.current = slider;
            }}
            {...settings}
          >
            {arr.map((item, index) => (
              <div
                className={`cursor-pointer px-4`}
                key={index}
                onClick={() => updateActiveList(item)}
              >
                <div
                  className={`cursor-pointer px-4 w-fit ${activeList === item ? 'border-b-2 border-black ' : ''}`}
                >
                  {item}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const NextButton = (props: NextButtonProps) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-[-14px_0px_20px_12px_#fff]"
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};

const PrevButton = (props: PrevButtonProps) => {
  const { onClick, activeIdx } = props;
  return (

    activeIdx ? (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer shadow-[14px_0px_20px_12px_#fff] bg-white"
        onClick={onClick}
      >
        <ArrowLeft />
      </div >
    ) : (
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer "
      >
        <Plus />
      </div>
    )
  );
};

interface NextButtonProps {
  onClick: () => void;
}

interface PrevButtonProps {
  onClick: () => void;
  activeIdx: number;
}

export default BlogList;
