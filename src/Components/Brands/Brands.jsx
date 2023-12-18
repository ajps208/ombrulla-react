import React from 'react'

function Brands() {
  return (
    <>
     <div
        className="hidden md:w-full md:mt-10 md:flex md:flex-col md:items-center md:justify-center"
      >
        <h6>
          <i  className="fa-solid fa-square fa-2xs me-3 text-blue-600"></i>BRANDS WE WORK WITH
          <i
            className="fa-solid fa-square fa-2xs ms-3  text-blue-600"
          ></i>
        </h6>
        <h1 className="text-3xl font-bold mt-3">
          Trusted by Thousands of Businesses
        </h1>
        <div className="bg-slate-100 md:mx-28 my-14">
          <div className="flex">
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp"
              alt=""
            />
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp"
              alt=""
            />
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp"
              alt=""
            />
          </div>
          <div className="flex">
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp"
              alt=""
            />
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp"
              alt=""
            />
            <img
              className="w-52 ms-24 me-24"
              src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Brands