import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ServiceMain from "@/components/containers/ServiceMain";
import HomeTwoModal from "@/components/containers/home-two/HomeTwoModal";
import UxProcessTwo from "@/components/containers/service-details/UxProcessTwo";
import HomeTestimonialThree from "@/components/containers/home-three/HomeTestimonialThree";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const OurServices = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner title="Servicios" navigation="Servicios" />
      <ServiceMain />
      {/* <HomeTwoModal />
      <UxProcessTwo />
      <HomeTestimonialThree /> */}
      <CtaTwo />
    </Layout>
  );
};

export default OurServices;
