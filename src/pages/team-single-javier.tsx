import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMainJavier from "@/components/containers/TeamDetailsMain-Javier";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner
        title="Javier Pianta"
        navigation="Detalles"
        parent="Equipo"
        parentLink="our-teams"
      />
      <TeamDetailsMainJavier />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
