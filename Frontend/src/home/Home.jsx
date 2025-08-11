import React from "react";
import Footer from "../components/Footer";
import Freebook from "../components/Freebook";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
};

export default Home;
