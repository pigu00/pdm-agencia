import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMain from "@/components/containers/TeamDetailsMain";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner
        title="no usar"
        navigation="Team Details"
        parent="Our Teams"
        parentLink="our-teams"
      />
      <TeamDetailsMain />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
