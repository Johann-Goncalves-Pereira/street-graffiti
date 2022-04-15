import styles from "./About.module.scss";

function About() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <section className={styles.photo}>
          <img
            className={styles.photo__img}
            src="https://picsum.photos/1024/1536?grayscale"
            alt="Cool Image"
          />
        </section>
        <section className={styles.text}></section>
      </section>
    </main>
  );
}

export default About;
