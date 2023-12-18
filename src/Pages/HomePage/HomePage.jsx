import React from "react";
import "./HomePage.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Hero from "../../Components/HeroPart/Hero";
import AI_Service from "../../Components/AI_Service/AI_Service";
import INFRASTRUCTURE from "../../Components/INFRASTRUCTURE/INFRASTRUCTURE";
import VisualInspection from "../../Components/VisualInspection/VisualInspection";
import DataAnalytics from "../../Components/DataAnalytics/DataAnalytics";
import Petran from "../../Components/Petran/Petran";
import Products from "../../Components/Products/Products";
import Customers from "../../Components/Customers/Customers";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Brands from "../../Components/Brands/Brands";
import Blogs from "../../Components/Blogs/Blogs";

function HomePage() {
  return (
    <>
      <div className="home md:h-screen">
        <Header />
        <Hero />
        </div>
        <AI_Service />
        <INFRASTRUCTURE />
        <VisualInspection />
        <DataAnalytics />
        <Petran />
        <Products />
        <Customers />
        <Testimonial/>
        <Brands/>
        <Blogs/>
        <Footer />
     
    </>
  );
}

export default HomePage;
