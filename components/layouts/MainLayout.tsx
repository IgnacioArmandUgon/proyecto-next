import Head from "next/head";
import { FC } from "react";
import styles from "../../styles/Home.module.css";
import { Navbar } from "../Navbar";
interface Props {
  children: React.ReactNode;
}
export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Etiqueta Head que simula ser la misma etiqueta head de HTML, con su información */}
      <Head>
        <title>Proyecto Next</title>
        <meta name="description" content="Creado por nach o" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};

