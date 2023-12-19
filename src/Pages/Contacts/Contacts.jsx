import React from "react";
import "../HomePage/HomePage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Contacts() {
  return (
    <>
      <div className="home h-96">
        <Header />
        <div className="mt-10 flex flex-col mx-4  item-center">
          <h1 className="text-4xl font-bold md:text-6xl md:pt-32  md:font-extrabold md:text-center">
            Let's talk about your business challenges and how AI can help you
            solve them.
          </h1>
          {/* form */}
          <div className="bg-slate-200 md:w-[60rem] md:ms-64 rounded-sm flex flex-col mt-14 px-14 py-14">
            <form className="flex flex-col" action="">
              <div className="md:flex">
                <input
                  className="rounded w-full h-14 px-4 md:w-[26rem]"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="rounded w-full h-14 mt-6 md:mt-0 px-4 md:ms-5 md:w-[26rem]"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <textarea
                className="rounded h-20 mt-6 px-4"
                type="text"
                placeholder="Message"
              />
              <button className="mt-5 h-12 text-white rounded bg-blue-600">
                SUBMIT MESSAGE
              </button>
            </form>
          </div>
          {/* locations */}
          <div className="md:flex md:justify-evenly md:w-[40rem] md:ms-96  border-2 ms-14 mt-10 border-gray-400 rounded-md w-[17rem] px-10 py-5">
            <div className="">
              <div className="flex md:mt-5">
                <img
                  className="w-10 rounded-full h-10"
                  src="https://www.ombrulla.com/ukFlag.png"
                  alt="ombrulla"
                  loading="lazy"
                />
                <h1 className="ms-1 font-bold text-lg">United Kingdom</h1>
              </div>
              <div>
                <p>53 Denton close</p>
                <p>Redhill</p>
                <p>+44 787 999 3892</p>
              </div>
            </div>
            <div className="">
              <div className="flex mt-5 ">
                <img
                  className="w-10 rounded-full h-10"
                  src="https://www.ombrulla.com/Germanyflag.png"
                  alt="ombrulla"
                  loading="lazy"
                />
                <h1 className="ms-1 font-bold text-lg">Germany</h1>
              </div>
              <div>
                <p>Schützenstraße 51A</p>
                <p>Lübeck</p>
                <p>+49 179 512 5812</p>
              </div>
            </div>
            <div>
              <div className="flex mt-5">
                <img
                  className="w-10 rounded-full h-10"
                  src="https://www.ombrulla.com/flagIndia.png"
                  alt="ombrulla"
                  loading="lazy"
                />
                <h1 className="ms-1 font-bold text-lg">India</h1>
              </div>
              <div>
                <p>No. 154/20, Royal Space,</p>
                <p>Third Floor TI, Bangalore</p>
                <p>+91 85900 56435</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contacts;
