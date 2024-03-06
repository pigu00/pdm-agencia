import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ContactMain from "@/components/containers/ContactMain";

const ContactUs = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner title="Contactanos" navigation="Contactanos" />
      <ContactMain />
    </Layout>
  );
};

export default ContactUs;
