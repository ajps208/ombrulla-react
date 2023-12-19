import React from "react";
import "../../index.css";

function VisualInspection() {
  return (
    <>
      <div className="w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-11/12 px-8 py-6">
          {/* <!-- fourth section image --> */}
          <div className="hidden md:block px-10 md:-ms-16">
            <img
              className="rounded"
              src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
              alt="ombrulla"
              loading="lazy"
            />
          </div>
          {/* <!-- fourth section detailes --> */}
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square bluecolor"></i>
              <p className="ms-2">
                <b>AI VISUAL INSPECTION</b>
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold mt-4">
                Improving Quality with Greater Precision
              </h1>
            </div>
            <div className="eighteenpx text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <b>Automated Defect Detection:</b> Automated visual inspection
                  uses computer vision and machine learning to identify defects
                  autonomously.
                </li>
                <li className="list-disc mt-2">
                  <b>Advanced Image Processing:</b> It captures and enhances
                  digital images for relevant feature extraction.
                </li>
                <li className="list-disc mt-2">
                  <b>Informed Decision-Making:</b>The system classNameifies
                  defects, aiding manufacturers in quality control decisions.
                </li>
                <li className="list-disc mt-2">
                  <b>Real-Time Quality Assurance: </b> Integration with
                  manufacturing enables real-time quality control and reduces
                  substandard product risks.
                </li>
              </ul>
            </div>
            {/* <!-- button div --> */}
            <div className="mt-6 flex items-center">
              <button className="w-36 h-12 bg-blue-600 rounded-full text-white hover:bg-white hover:text-black hover:border-black border-2">
                Schedule call
              </button>
              <p className="ms-2">
                <b>
                  Read more{" "}
                  <sup>
                    <i className="fa-solid fa-arrow-up-right-from-square bluecolor"></i>
                  </sup>
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VisualInspection;
