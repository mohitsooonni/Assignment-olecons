import React from "react";
import Container from "../../components/Container/Container";
import JoinCommunity from "../../components/JoinCommunity/JoinCommunity";
import Footer from "../../components/Footer/Footer";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <Container />
      <JoinCommunity />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
