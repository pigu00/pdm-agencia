import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMainHernan from "@/components/containers/TeamDetailsMain-Hernan";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Hernan Canal Vences"
        navigation="Detalles"
        parent="Equipo"
        parentLink="our-teams"
      />
      <TeamDetailsMainHernan />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
