import ContactForm from '../components/contact/ContactForm/ContactForm';
import Head from 'next/head';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name="description" value="NextJS contact page" />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
