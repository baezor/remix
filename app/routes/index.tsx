import React from "react";
import Sidebar from "../components/header/Sidebar";
import Hero from "../components/slider/Hero";

const Home = () => {
  return (
    <div className="home-light edina_tm_mainpart">
      <Sidebar />
      {/* End Header */}
      <Hero />
      {/* End Hero */}
    </div>
  );
};

export default Home;
