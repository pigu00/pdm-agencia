import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeSponsor from "@/components/containers/home/HomeSponsor";
import TeamMembers from "@/components/containers/TeamMembers";
import NextPage from "@/components/containers/home/NextPage";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";

const Home = () => {
  return (
    <Layout header={1} footer={1} video={false}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeSponsor />
      <TeamMembers/>
      <HomeTestimonial /> 
      <NextPage />
    </Layout>
  );
};

export default Home;
