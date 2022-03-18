import React from "react";
import Nav from "../Nav";
import Body from "../Body";
import Footer from "../Footer";
import "./home.scss";

const Home = () => {
  return (
    <div className="body-container">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;