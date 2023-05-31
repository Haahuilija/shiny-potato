import React, { useState, useEffect } from 'react';
import axios from 'axios';

declare global {
  interface Window {
    getToken: (token: string) => Promise<void>;
  }
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [schedule, setSchedule] = useState('');
  const [other, setOther] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');
  const [showSuccessVideo, setShowSuccessVideo] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;

    if (showSuccessVideo) {
      timerId = window.setTimeout(() => {
        setShowSuccessVideo(false);
      }, 2800); // hide the video after 5 seconds
    }

    return () => {
      if (timerId) {
        window.clearTimeout(timerId); // clear timeout if the component is unmounted
      }
    };
  }, [showSuccessVideo]);

  const handleSubmit = async (token: string) => {
    console.log('handleSubmit function called');
    console.log('Token received:', token);
    console.log('Sending form data...');

    try {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      console.log('Schedule:', schedule);
      console.log('Other:', other);
      console.log('Token:', token);

      const formObject = {
        name: name,
        email: email,
        message: message,
        schedule: schedule,
        other: other,
        token: token,
      };

      console.log('Form Data:', formObject);

      const response = await axios.post('/api/handleToken', formObject);

      console.log('Form data sent successfully.');

      if (response.status === 200) {
        const data = response.data;
        setSubmitStatus(data.message);
        setName('');
        setEmail('');
        setMessage('');
        setSchedule('');
        setOther('');
        setShowSuccessVideo(true);
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('Error sending message');
    }
  };

  const getToken = async (token: string): Promise<void> => {
    console.log('Token:', token);
    await handleSubmit(token);
  };

  useEffect(() => {
    window.getToken = getToken;
  }, [name, email, message, schedule, other]); // pass the state variables as dependencies

  return (
    <form className="contact-form" id="demo-form">
      <div className="form-group">
        <label htmlFor="name">Nimi:</label>
        <input
          type="text"
          className="form-control form-input"
          id="name"
          placeholder="Etunimi Sukunimi"
          value={name}
          onChange={(event) => {
            console.log(event.target.value);
            setName(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Sähköposti:</label>
        <input
          type="email"
          className="form-control form-input"
          id="email"
          placeholder="Sähköpostiosoite, johon haluat minun vastaavan"
          value={email}
          onChange={(event) => {
            console.log(event.target.value);
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Millainen teksti kyseessä:</label>
        <textarea
          className="form-control form-input"
          id="message"
          placeholder='tekstilaji, pituus, aihe'
          rows={8}
          value={message}
          onChange={(event) => {
            console.log(event.target.value);
            setMessage(event.target.value);
          }}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="schedule">Aikataulu:</label>
        <input
          type="text"
          className="form-control form-input"
          id="schedule"
          placeholder="Esim. Kahden viikon sisään, 10.9. mennessä"
          value={schedule}
          onChange={(event) => {
            console.log(event.target.value);
            setSchedule(event.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="other">Muuta:</label>
        <textarea
          className="form-control form-input"
          id="other"
          placeholder="Muuta huomioitavaa, jos sellaista on"
          rows={5}
          value={other}
          onChange={(event) => {
            console.log(event.target.value);
            setOther(event.target.value);
          }}
        ></textarea>
      </div>
      <button
        className="g-recaptcha"
        data-sitekey="6LdUyYwlAAAAAGaNvJAKC6916P2r9Qhl4jL47Ejk"
        data-callback="getToken"
        type="submit"
        disabled={submitStatus !== ''}
      >
        Lähetä
      </button>
      {submitStatus && <p>{submitStatus}</p>}
      {showSuccessVideo && <img src="/success3.gif" alt="Submission Successful" />}
    </form>
  );
};

export default ContactForm;