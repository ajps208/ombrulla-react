import React from "react";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <>
      <div className="bg-gray-100">
        <div className="flex justify-between md:px-7 md:py-14 px-5 py-10">
          <Link to={'/'}>
            <img
              className="max-w-[12rem]"
              src="https://blog.ombrulla.com/wp-content/uploads/2023/11/logo-black-1.png"
              alt=""
              srcset=""
            />
          </Link>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            id="mobile-menu-button"
            type="button"
          >
            <i id="menu-icon" className="fa-solid fa-bars block text-lg"></i>{" "}
          </button>
          <p className="hidden md:block">About Ombrulla</p>
        </div>
        <h1 className="text-center text-2xl font-bold">AI NEWSROOM</h1>
        {/* ai news room */}
        <div className="  md:w-full md:px-14 px-5 mt-16">
        <div className="md:flex">
              <div className="md:w-1/2 md:mt-10 ">
                <img
                  className=" rounded-xl"
                  src="https://blog.ombrulla.com/wp-content/uploads/2023/12/Google-io-2023.webp"
                  alt=""
                />
               <div className="bg-white rounded-md">
                    <h1 className=" text-md px-2 py-3 font-semibold">Google I/O 2023: A Deeper Look at the Future of AI</h1>
                    <p className="px-2 text-gray-500">December 8, 2023</p>
               </div>
              </div>
              <div className="mt-10 md:w-1/2  md:mx-3 ">
                <img
                  className="rounded-xl"
                  src="https://blog.ombrulla.com/wp-content/uploads/2023/11/Blog-Images.png"
                  alt=""
                />
               <div className="bg-white rounded-md">
                    <h1 className=" text-md px-2 py-3 font-semibold">A Deep Understanding of AI Visual Inspection</h1>
                    <p className="px-2 text-gray-500">December 8, 2023</p>
               </div>
              </div>
        </div>
          <div className="mt-10 md:w-1/2 ">
            <img
              className="rounded-xl"
              src="https://blog.ombrulla.com/wp-content/uploads/2023/11/AI-on-Process-Optimization-and-Quality-Control.webp"
              alt=""
            />
           <div className="bg-white rounded-md">
                <h1 className=" text-md px-2 py-3 font-semibold">Use of AI in Process Optimization and Quality Control</h1>
                <p className="px-2 text-gray-500">December 8, 2023</p>
           </div>
          </div>
        </div>
        {/* footer */}
        <div  className="md:px-14 md:mt-28 md:flex mt-16 px-5">
          <div>
            <h1>
              Explore the fascinating world of AI through our blog, where we
              unravel insights, trends, and stories reshaping the future. Don’t
              forget to follow me on:
            </h1>
            <div className="mt-4">
              <i class="fa-brands text-2xl fa-facebook "></i>
              <i class="fa-brands text-2xl fa-twitter ms-3"></i>
              <i class="fa-brands text-2xl fa-instagram  ms-3"></i>
              <i class="fa-brands text-2xl fa-linkedin  ms-3"></i>
            </div>
            <p className="hidden md:block mt-10 mb-6">Copyright @ <u>Ombrulla.com</u></p>
          </div>
          <div className="mt-10 md:mt-0">
            <p>
              Subscribe to our email newsletter brimming with inspiring stories
              of AI transforming businesses.
            </p>{" "}

            <p className=" md:hidden mt-10">Copyright @ <u>Ombrulla.com</u></p>

          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;
