import React from "react";

function Products() {
  return (
    <>
      <div className="w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-11/12 px-8 py-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square"></i>
              <p className="ms-2">
                <b>PRODUCTS</b>
              </p>
            </div>

            <h1 className="text-2xl mt-2 font-bold">Our HR Tools</h1>
            <p className="mt-3 font-medium text-gray-500">
              Our job grading and evaluation tool, combined with the
              compensation management tool, is a highly effective SaaS-based
              solution. It greatly assists HR consultants and managers in
              carrying out their roles with efficiency and precision.
            </p>
          </div>

          <div className="flex flex-col bg-slate-100 rounded-lg mt-10 px-8 py-8">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">
                Job Grading and Evaluation
              </h2>
              <p className="mt-3 font-medium text-gray-500">
                Job evaluation assesses and ranks job roles in an organization
                based on responsibilities and skills, often for compensation and
                structuring purposes.
              </p>
              <img
                className="w-44 mt-5"
                src="	https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp"
                alt="ombrulla"
                loading="lazy"
              />
              <p className="-ms-44 mt-4">
                Free Trial{" "}
                <sup>
                  <i className="fa-solid fa-arrow-up-right-from-square  text-blue-600"></i>
                </sup>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:ms-10 bg-slate-100 rounded-lg mt-10 px-8 py-8">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold">
                Compensation Management
              </h2>
              <p className="mt-3 font-medium text-gray-500">
                Compensation management software automates salary planning,
                budget management, and equity analysis, ensuring fair and
                competitive pay practices.
              </p>
              <img
                className="w-44 mt-5"
                src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp"
                alt="ombrulla"
                loading="lazy"
              />
              <p className="-ms-32 mt-4">
                Book For Demo{" "}
                <sup>
                  <i className="fa-solid fa-arrow-up-right-from-square text-blue-600"></i>
                </sup>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
