/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import HomePage from "../components/Home Page/HomePage";
import { useAuth } from "../context/UserContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tripple Epic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <HomePage />
      </div>
    </div>
  );
}
