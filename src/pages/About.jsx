import React from "react";
import "../styles/about.scss";
import Aboutbanner from "../components/abouts/Aboutbanner";
import BannerImg from "../assets/images/banner/banner1.jpg";
const About = () => {
  return (
    <>
      <Aboutbanner title="GIỚI THIỆU" image={BannerImg}>
        Chào mừng các bạn đến với LTK_Shop
      </Aboutbanner>
    </>
  );
};

export default About;
