import styles from "./About.module.scss";

const Col = () => {
  return (
    <section className={styles.container}>
      <section className={styles.photo}>
        <img
          className={styles.photo__img}
          src="https://picsum.photos/1024/1536?grayscale"
          alt="Cool Image"
        />
      </section>
      <section className={styles.info} aria-labelledby="h2">
        <header>
          <h2 itemID="h2" className={styles.info__title}>
            Where II
            <span className={styles.info__title__second}>All Began</span>
          </h2>
        </header>
        <p className={styles.info__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          deleniti nisi sit non officiis eos itaque, provident dolor quas
          necessitatibus illum porro, perferendis nobis neque, possimus
          voluptatem tempora quibusdam expedita. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Dolore, consectetur, impedit commodi,
          possimus debitis eaque alias praesentium optio facere officia dolorum
          maxime temporibus? Nulla similique tempore modi voluptas, dolore ab!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Debitis dolores
          unde eius recusandae mollitia odit atque, praesentium illum in minus
          ipsam aut, asperiores dicta beatae quasi perspiciatis quas, velit
          officia.
        </p>
        <footer>
          <button className={styles.info__btm} typeof="button">
            ^
          </button>
        </footer>
      </section>
    </section>
  );
};

function About() {
  return (
    <>
      <main className={styles.main}>
        <Col />
        <Col />
        <Col />
        <Col />
        <Col />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footer__icons}></div>
        <p className={styles.footer__contact}></p>
        <p className={styles.footer__copyright}></p>
      </footer>
    </>
  );
}

export default About;
