import React from "react";
import "./AI_Service.css";

function AI_Service() {
  return (
    <>
      <div className="md:mt-20 w-full flex items-center justify-center">
        <div className="secongimg rounded-xl w-11/12 px-8 py-6 md:mx-20 md:px-32 md:py-32">
          <div className="flex items-center">
            <i className="fa-solid fa-square"></i>
            <p className="ms-2">The Best AI Service Provider</p>
          </div>
          <div>
            <h1 className="md:text-5xl text-3xl  font-bold mt-4">
              Crafting Tomorrow's World with
              <span className="text-blue-600 text-3xl  md:text-5xl font-normal">
                {" "}
                AI Excellence
              </span>
            </h1>
          </div>
          <div className="font text-gray-500 mt-5">
            The majority of customers lack data-driven insights and automation.
            Using AI, Ombrulla assist clients in extracting data from diverse
            sources such as photos, videos, and data lakes, which can assist
            businesses in making data-driven insights and improving their bottom
            line.
          </div>
          {/* <!-- button div --> */}
          <div className="flex items-center">
            <button className="ml-5 mt-5 w-14 h-14 aspect-w-1 aspect-h-1 bg-blue-600 rounded-full">
              <i className="fa-solid fa-caret-down fa-rotate-270 text-2xl"></i>
            </button>
            <span className="ms-5 text-md font-extrabold mt-5">
              Watch Corporate Video{" "}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AI_Service;
