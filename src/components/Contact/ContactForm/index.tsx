import { useState } from 'react';
import styles from './index.module.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const resetForm = () =>
    setForm({
      ...form,
      name: '',
      email: '',
      subject: '',
      message: '',
    });

  const handleChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const property = event.target.name;
    const value = event.target.value.trimEnd();
    const newForm = { ...form, [property]: value };
    setForm(newForm);
  };

  const handleMessageChangeEvent = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value.trimEnd();
    const newForm = { ...form, message: value };
    setForm(newForm);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(
      `Data sent:\nName: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\nMessage: ${form.message}`
    );
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>Contact</h2>
      <input
        onChange={handleChangeEvent}
        value={form.name}
        name="name"
        type="text"
        placeholder="Your name"
        required
      />
      <input
        onChange={handleChangeEvent}
        value={form.email}
        name="email"
        type="email"
        placeholder="Your email"
        required
      />
      <input
        onChange={handleChangeEvent}
        value={form.subject}
        name="subject"
        type="text"
        placeholder="Subject"
        required
      />
      <textarea
        name="message"
        onChange={handleMessageChangeEvent}
        value={form.message}
        placeholder="Message"
        required
      ></textarea>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
