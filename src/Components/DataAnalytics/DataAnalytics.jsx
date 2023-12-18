import React from 'react'
import "../../index.css";


function DataAnalytics() {
  return (
    <>
     <div className="third w-full flex items-center justify-center md:mt-32">
        <div className="md:flex rounded-xl w-11/12 px-8 py-6">
          <div className="flex flex-col">
            <div className="flex items-center">
              <i className="fa-solid fa-square bluecolor"></i>
              <p className="ms-2"><b>AI DATA ANALYTICS</b></p>
            </div>
            <div>
              <h1 className="text-3xl font-bold mt-4">
                Empowers Businesses to Make Insightful Decisions
              </h1>
            </div>
            <div  className="eighteenpx text-justify mt-5 md:text-xl">
              <ul>
                <li className="list-disc">
                  <b> Actionable Insights:</b> AI data analysis enhances
                  decisions, personalizes customer experiences and improve
                  operations.
                </li>
                <li className="list-disc mt-2">
                  <b>Increased Customer Loyalty:</b> AI predictive analytics for
                  personalized recommendations & increased customer loyalty.
                </li>
                <li className="list-disc mt-2">
                  <b> Quality Assurance:</b> AI analytics identifies and
                  mitigates potential issues, ensuring the quality and
                  reliability of products and services.
                </li>
                <li className="list-disc mt-2">
                  <b>Efficiency and Responsiveness:</b> Customers benefit from
                  increased efficiency, improved product quality, and more
                  responsive interactions with businesses.
                </li>
              </ul>
            </div>
            {/* <!-- button div --> */}
            <div className="mt-6 flex items-center">
              <button
                className="w-36 h-12 bg-blue-600 rounded-full text-white hover:bg-white hover:text-black hover:border-black border-2"
              >
                Schedule call
              </button>
              <p className="ms-2">
                <b
                  >Read more{" "}
                  <sup
                    ><i
                      className="fa-solid fa-arrow-up-right-from-square bluecolor"
                    ></i></sup
                ></b>
              </p>
            </div>
          </div>

          {/* <!-------------------------------------------------- fifth section image------------------------------------------------ --> */}
          <div className="hidden md:block px-14">
            <img
              className="rounded"
              src="https://www.ombrulla.com/_astro/ai-data-analytics.ef51a904_1g36GR.webp"
              alt=""
            />
          </div>
        </div>
      </div></>
  )
}

export default DataAnalytics