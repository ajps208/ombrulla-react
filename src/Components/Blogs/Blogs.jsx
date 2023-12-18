import React from "react";

function Blogs() {
  return (
    <>
      <div className="w-full mt-10 flex flex-col items-center justify-center">
        <h6>
          <i className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>BLOG
          UPDATES
          <i className="fa-solid fa-square fa-2xs ms-3 text-blue-600"></i>
        </h6>
        <h1 className="text-3xl font-bold mt-3">To Read</h1>
        <div className="mx-10 mt-5 border-t-2 md:flex md:flex-row">
          <div className="mt-8">
            <img
              className="rounded-sm md:w-96"
              src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp"
              alt=""
            />
            <p className="text-base md:text-xl md:w-96 font-bold text-gray-900">
              Privacy and security with Artificial Intelligence
            </p>
            <p className="text-sm  md:w-96">
              Privacy and security are significant concerns when it comes to AI.
              AI systems often require access to large amounts of personal data,
              which can be ...
            </p>
            <div className="flex mt-2">
              <img
                className="w-10 rounded-full"
                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                alt=""
              />
              <div className="flex flex-col ms-3 ">
                <p>Zara Elizabeth</p>
                <p>Mar 16, 2020 · 6 min read</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:ms-4">
            <img
              className="rounded-sm md:w-96"
              src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png"
              alt=""
            />
            <p className="text-base md:text-xl font-bold text-gray-900  md:w-96">
              The impact of AI on jobs and the workforce
            </p>
            <p className="text-sm  md:w-96">
              Privacy and security are significant concerns when it comes to AI.
              AI systems often require access to large amounts of personal data,
              which can be ...
            </p>
            <div className="flex mt-2">
              <img
                className="w-10 rounded-full"
                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                alt=""
              />
              <div className="flex flex-col ms-3">
                <p>Zara Elizabeth</p>
                <p>Mar 16, 2020 · 6 min read</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:ms-4">
            <img
              className="rounded-sm md:w-96"
              src="https://blog.ombrulla.com/wp-content/uploads/2023/11/AI-on-Process-Optimization-and-Quality-Control.webp"
              alt=""
            />
            <p className="text-base md:text-xl font-bold text-gray-900  md:w-96">
              Use of AI in Process Optimization and Quality Control{" "}
            </p>
            <p className="text-sm  md:w-96">
              Privacy and security are significant concerns when it comes to AI.
              AI systems often require access to large amounts of personal data,
              which can be ...
            </p>
            <div className="flex mt-2">
              <img
                className="w-10 rounded-full"
                src="https://secure.gravatar.com/avatar/1ed886cb123f0f55aba0afe6ecc7f56c?s=96&d=mm&r=g"
                alt=""
              />
              <div className="flex flex-col ms-3">
                <p>Zara Elizabeth</p>
                <p>Mar 16, 2020 · 6 min read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
