import React from "react";
import "../../index.css";

function Petran() {
  return (
    <>
      <div className="w-full flex items-center justify-center md:mt-32 bg-blue-600">
        <div className="md:flex md:flex-row w-11/12 py-6">
          <div className="flex flex-col mt-10 md:px-16 md:py-20 md:w-7/12">
            <div>
              <img
                className="w-24 md:h-6 md:w-28"
                src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp"
                alt=""
              />
              <h2 className="text-1xl md:text-base font-normal leading-8 tracking-tight text-white">
                <span className="text-white font-bold">PE</span>rformance -
                <span className="text-white font-bold">TR</span>acking -
                <span className="text-white font-bold">AN</span>alytics
                <h1 className="md:pt-6 md:text-4xl text-3xl w-10/12 text-white">
                  AI & IoT Enabled Asset Performance Management
                </h1>
              </h2>
              <p className="md:pt-3 mt-2 text-lg w-11/12 text-white">
                Petran offers an Asset Performance Management (APM) system that
                harnesses the power of artificial intelligence and the Internet
                of Things (IoT) to empower data-driven decision-making and
                enable proactive maintenance strategies.
              </p>
              <div className="mt-5 flex md:mx-10 md:-ml-1">
                <button className="w-36 h-12  rounded-full text-white border-white border-2 hover:text-black hover:border-black">
                  Schedule call
                </button>
                <div className="flex items-center">
                  <button className="ml-5 w-12 h-12 aspect-w-1 aspect-h-1 border-2 border-white rounded-full">
                    <i className="fa-solid fa-caret-down fa-rotate-270 text-2xl"></i>
                  </button>
                  <span className="ms-5 text-lg  text-white hover:text-black font-semibold">
                    Watch Video
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-------------------------------------------------- image --------------------------------------------------> */}
          <div className="px-14 md:px-0 py-14 mt-10 md:w-5/12">
            <img
              className="rounded md:w-full md:h-full"
              src="	https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
              alt="ombrulla"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Petran;
