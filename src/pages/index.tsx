import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>SolEth NFT Portal</title>
        <meta
          name="description"
          content="Ethereum NFTs traded on Solana. The full trading experience and collections you love at 1/100th the cost."
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
