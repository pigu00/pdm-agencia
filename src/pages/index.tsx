import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeOffer from "@/components/containers/home/HomeOffer";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeBlog from "@/components/containers/home/HomeBlog";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import NextPage from "@/components/containers/home/NextPage";
import TeamMembers from "@/components/containers/TeamMembers";
import ServiceMain from "@/components/containers/ServiceMain";
import Carousel from "@/components/containers/Carousel";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={false}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      {/* <HomeOffer /> */}
      {/* <HomeTestimonial /> */}
      {/* <HomeBlog /> */}
      {/* <HomeOffer />  */}
      <HomeSponsor /> 
      <TeamMembers/>
      <HomeTestimonial /> 
      {/* <ServiceMain/> */}
      <NextPage />
    </Layout>
  );
};

export default Home;
