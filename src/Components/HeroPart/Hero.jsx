import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="container mt-10 md:mt-1 px-4 md:px-8">
        <div className="flex flex-col md:flex-row w-full">
          {/* <!-- first row --> */}
          <div className="w-full">
            <div className="w-9/12 md:mt-20 md:px-20">
              <h1 className="text-6xl font-bold">
                Manual Inspection is
                <span className="text-6xl font-normal text-blue-500">
                  {" "}
                  Slow & Error-Prone
                </span>
              </h1>
            </div>
            <div className="mt-5 text-gray-500 md:px-20">
              <p>
                AI-driven computer vision transforms manufacturing quality
                inspection, boosting precision and cost-efficiency while
                upholding product excellence.
              </p>
            </div>
            {/* <!-- button --> */}
            <div className="mt-10 flex md:px-20">
              <button className="w-36 h-12 bg-blue-600 rounded-full text-white">
                Schedule call
              </button>
              <div className="flex items-center">
                <button className="ml-5 w-12 h-12 aspect-w-1 aspect-h-1 bg-blue-600 rounded-full">
                  <i className="fa-solid fa-caret-down fa-rotate-270"></i>
                </button>
                <span className="ms-5 text-lg hidden md:block">
                  Watch Video
                </span>
              </div>
            </div>
          </div>
          {/* <!-- second row --> */}
          <div className="w-full">
            <div className="flex justify-center align-center">
              <div className="md:w-1/2">
                <div className="mt-10 border-2 md:absolute md:top-[50px] md:left-[800px] sliderShape border-blue-600 rounded-full overflow-hidden hidden md:block"></div>
                <div className="anotherShape mt-10 border-2 md:absolute md:top-[50px] md:left-[1020px] border-white rounded-full overflow-hidden hidden md:block"></div>
                <img
                  src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
                  alt="ombrulla"
                  className="maskimg w-full h-auto md:absolute md:top-[100px] md:left-[870px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
