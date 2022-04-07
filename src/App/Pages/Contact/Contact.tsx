import styles from "./Contact.module.scss";

function Contact() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper} aria-labelledby="heading">
        <h1 className={styles.wrapper__heading} itemID="heading">
          Get In Touch
        </h1>
        <p className={styles.wrapper__text}>Have some Art in mind?</p>
        <p className={styles.wrapper__text}>
          or want to consult with one of our artists?
        </p>
        <p className={styles.wrapper__text}>Let's talk.</p>
        <p className={`${styles.wrapper__text} mt-3 `}>
          <em>284 Rua das Mangueiras, BR/PR</em>
        </p>
        <p className={styles.wrapper__text}>
          <em>41-99999-9999</em>
        </p>
      </section>
      <form className={styles.form}>
        <input className={styles.form__input} placeholder="Your name" />
        <input
          className={styles.form__input}
          type="email"
          placeholder="Email address"
        />
        <input className={styles.form__input} placeholder="Phone number" />
        <textarea
          className={styles.form__textarea}
          placeholder="Your message"
        ></textarea>

        <button className={styles.button} type="submit">
          send
        </button>
      </form>
    </main>
  );
}

export default Contact;
