import React from "react";
import "./Customers.css";

function Customers() {
  return (
    <>
      <div className="mt-8 mb-8 products p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7">
        <div className="text-center">
          <div className="flex md:gap-x-4 gap-x-2 items-center mb-4 mx-auto items-center justify-center">
            <i  className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>{" "}
            <p className="text-medium md:font-bold font-normal">OUR CUSTOMERS</p>
            <i
              className="fa-solid fa-square fa-2xs me-3  text-blue-600"
            ></i>{" "}
          </div>
          <h3 className="md:text-5xl text-3xl">They Trust Us</h3>
        </div>
        <div className="logos">
          <div className="logo-scroll">
            <img
              src="https://www.ombrulla.com/best-western.webp"
              alt="Best Western"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/dubai-festival-city.webp"
              alt="Dubai Festival City"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/wild-leaf.webp"
              alt=" Wild Leaf"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/emirates.webp"
              alt="Emirates"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/burger-king.webp"
              alt="Burger King"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/damac.webp"
              alt="Damac"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/planet-fitness.webp"
              alt="Planet Fitness"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/suja.webp"
              alt="Suja"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
            <img
              src="https://www.ombrulla.com/azelit.webp"
              alt="Azelit"
              className="p-5 h-[8rem] md:h-[12rem] logo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Customers;
