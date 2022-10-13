import styles from "../styles/Home.module.css";
import {MainLayout} from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { ReactElement, ReactNode } from "react";

export default function Contact() {
  return (
    <>
      <h1 className={styles.title}>Home</h1>

      <p className={styles.description}>
        Cosa rara de JavaScript &rarr;{" "}
        <code className={styles.code}>typeof NaN = number</code>
      </p>
    </>
  );
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
