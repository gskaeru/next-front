import Head from "next/head";
import styles from "@/styles/style.module.scss";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.container}>
        <p>ここにコンテンツを書く</p>
      </main>
    </>
  );
}
