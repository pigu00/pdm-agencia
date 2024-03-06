import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import TeamDetailsMainAgustin from "@/components/containers/TeamDetailsMain-Agustin";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const TeamDetails = () => {
  return (
    <Layout header={1} footer={1} video={0}>
      <CmnBanner
        title="Agustin Wenger"
        navigation="Detalles"
        parent="Equipo"
        parentLink="our-teams"
      />
      <TeamDetailsMainAgustin />
      <CtaTwo />
    </Layout>
  );
};

export default TeamDetails;
