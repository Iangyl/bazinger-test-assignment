import Map from './Map';
import ContactForm from './ContactForm';
import styles from './index.module.css';

const Contact = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <Map />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
