import React from "react";
import { Layout } from "~/components";
import Jumbotron from "./Jumbotron";
import styles from "./Home.module.scss";
import CompanyList from "./CompanyList";
import VideoSection from "./VideoSection";
import GameList from "./GameList";
import NewsSection from "./NewsSection";

function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <Jumbotron />
        <CompanyList />
        <VideoSection />
        <GameList />
        <NewsSection />
      </div>
    </Layout>
  );
}

export default Home;
