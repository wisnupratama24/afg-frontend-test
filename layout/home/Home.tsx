import React from "react";
import { Layout } from "~/components";
import Jumbotron from "./Jumbotron";
import styles from "./Home.module.scss";
import CompanyList from "./CompanyList";
import VideoSection from "./VideoSection";
import GameList from "./GameList";
import NewsSection from "./NewsSection";
import StrategicInvestorSection from "./StrategicInvestorSection";
import FooterSection from "./FooterSection";

function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <Jumbotron />
        <CompanyList />
        <VideoSection />
        <GameList />
        <NewsSection />
        <StrategicInvestorSection />
        <FooterSection />
      </div>
    </Layout>
  );
}

export default Home;
