import React from "react";
import "../../index.css";

function INFRASTRUCTURE() {
  return (
    <>
      <div className="third w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-11/12 px-8 py-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square bluecolor"></i>
              <p className="ms-2">
                <b>AI INFRASTRUCTURE INSPECTION</b>
              </p>
            </div>
            <div>
              <h1 className="text-3xl font-bold mt-4">
                Enhances Efficiency, Safety, and Cost-Effectiveness
              </h1>
            </div>
            <div className="eighteenpx text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <b>Cutting-Edge Solution:</b> Ombrulla leverages AI, drones,
                  and IoT technologies to transform infrastructure inspection.
                </li>
                <li className="list-disc mt-2">
                  <b>Real-Time Insights:</b> Real-time insights enhance
                  inspection efficiency, safety, and reduce conventional
                  challenges.
                </li>
                <li className="list-disc mt-2">
                  <b>Longevity and Cost-Effectiveness:</b> Ombrulla ensures the
                  longevity and safety of critical infrastructure while offering
                  a cost-effective solution.
                </li>
                <li className="list-disc mt-2">
                  <b>Responsive Maintenance: </b>Enhances infrastructure
                  management, increasing reliability and responsiveness, and
                  reducing risks.
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
                  Read more <sup><i className="fa-solid fa-arrow-up-right-from-square text-blue-600"></i></sup>{" "}
                </b>
              </p>
            </div>
          </div>
          {/* <!-- Third section image --> */}
          <div className="hidden  md:block  px-14">
            <img
              className="rounded"
              src="https://www.ombrulla.com/_astro/ai-infrastructure-inspection.c8f30cbf_ZEO7he.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default INFRASTRUCTURE;
