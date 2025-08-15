import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    sliderImages(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle slide change with fade effect
  const changeSlide = (newSlide) => {
    setFade(false);
    setTimeout(() => {
      setSlide(newSlide);
      setFade(true);
    }, 300);
  };

  return (
    <Fragment>
      <div className="relative mt-16 bg-gray-100 border-2 overflow-hidden rounded-lg">
        {data.sliderImages.length > 0 ? (
          <img
            className={`w-full transition-opacity duration-300 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
            src={`${apiURL.replace('/api', '')}/${encodeURIComponent(data.sliderImages[slide].slideImage.replace(/^\/api\/+/, '').replace(/^\/+/, ''))}`}
            alt="sliderImage"
          />
        ) : (
          ""
        )}

        {data?.sliderImages?.length > 0 ? (
          <>
            <button
              onClick={() =>
                changeSlide((slide - 1 + data.sliderImages.length) % data.sliderImages.length)
              }
              aria-label="Previous Slide"
              className="z-10 absolute top-1/2 left-2 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 bg-white bg-opacity-70 rounded-full shadow-md text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                changeSlide((slide + 1) % data.sliderImages.length)
              }
              aria-label="Next Slide"
              className="z-10 absolute top-1/2 right-2 transform -translate-y-1/2 flex justify-center items-center w-12 h-12 bg-white bg-opacity-70 rounded-full shadow-md text-gray-700 hover:bg-yellow-400 hover:text-white transition-colors duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <a
                href="#shop"
                style={{ background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)" }}
                className="cursor-pointer box-border text-2xl text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
              >
                Shop Now
              </a>
            </div>
          </>
        ) : null}
      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
