import React from "react";
import "../HomePage/HomePage.css";

import Header from "../../Components/Header/Header";

function About() {
  return (
    <>
      <div className="home h-96">
        <Header />
        <div className="mt-10 flex flex-col mx-4 item-center">
          <h1 className="text-4xl font-bold md:text-6xl md:pt-32  md:font-extrabold md:text-center">
            Helping business to unlock business growth and innovation through AI
          </h1>
          <div className="md:flex rounded-xlw-11/12 md:pt-36  py-6">
            {/* <!-- Third section image --> */}
            <div className="  md:block md:px-14 pt-16 ">
              <img
                className="rounded w-full"
                src="https://wptf.themepul.co/tronix/wp-content/uploads/2023/06/1.jpg"
                alt=""
              />
            </div>
            <div className="flex flex-col mt-10 md:w-7/12 md:px-28 md:py-6">
              <div className="flex items-center">
                <i className="fa-solid fa-square bluecolor"></i>
                <p className="ms-2">
                  <b>WELCOME TO OUR COMPANY</b>
                </p>
              </div>
              <div className="">
                <h1 className="text-3xl font-bold mt-4 md:text-4xl md:font-medium">
                  To Transform Every Customer with AI-powered Solutions That
                  Improve Their Bottom Line
                </h1>
              </div>
              <div className="eighteenpx text-justify mt-5 md:text-xl">
                <p>
                  OMBRULLA exists to harness the revolutionary power of
                  artificial intelligence, addressing complex challenges and
                  driving innovation. It seeks to create specialised AI-powered
                  solutions that match market demands, boost operational
                  efficiency, and give data-driven insights, all while adhering
                  to responsible AI practices.
                </p>
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
                      <i className="fa-solid fa-arrow-up-right-from-square text-blue-600"></i>
                    </sup>{" "}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default About;
