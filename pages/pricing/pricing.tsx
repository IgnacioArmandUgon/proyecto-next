import styles from "../../styles/Home.module.css";
import {MainLayout} from "../../components/layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <h1 className={styles.title}>Pricing</h1>

      <p className={styles.description}>
        Cosa rara de JavaScript &rarr;{" "}
        <code className={styles.code}>typeof NaN = number</code>
      </p>
    </MainLayout>
  );
}
