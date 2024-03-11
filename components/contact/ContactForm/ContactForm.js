import { useEffect, useState } from 'react';
import s from './ContactForm.module.css';
import Notification from '../../ui/Notification/Notification';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestError(null);
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  function sendMessageHangler(event) {
    event.preventDefault();

    setRequestStatus('pending');

    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((data) => {
          console.log({ data });
          throw new Error(data.message);
        });
      })
      .then(() => {
        setRequestStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        setRequestError(error.message);
        setRequestStatus('error');
      });
  }

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Sending...',
    };
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Message set successfully',
    };
  } else if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
  }

  return (
    <section className={s.contact}>
      <h1>How can I help you</h1>
      <form className={s.form} onSubmit={sendMessageHangler}>
        <div className={s.controls}>
          <div className={s.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={s.control}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={s.control}>
          <label htmlFor="message">Yout message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={s.actions}>
          <button type="submit">Send message</button>
        </div>
      </form>
      {notification && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;
