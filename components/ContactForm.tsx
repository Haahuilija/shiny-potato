import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validateForm from './validateForm';
import { TailSpin } from 'react-loader-spinner';

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
  const [submitStatus, setSubmitStatus] = useState<Record<string, string>>({});
  const [showSuccessVideo, setShowSuccessVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timerId: number | undefined;

    if (showSuccessVideo) {
      timerId = window.setTimeout(() => {
        setShowSuccessVideo(false);
      }, 4200); // hide the video after 4.2 seconds
    }

    return () => {
      if (timerId) {
        window.clearTimeout(timerId); // clear timeout if the component is unmounted
      }
    };
  }, [showSuccessVideo]);

  const handleSubmit = async (token: string) => {
    setIsLoading(true);
    const { formIsValid, errors } = validateForm(name, email, message, schedule);

    if (!formIsValid) {
      setSubmitStatus(errors);
      setIsLoading(false);
      return;
    }

    try {
      const formObject = {
        name: name,
        email: email,
        message: message,
        schedule: schedule,
        other: other,
        token: token,
      };

      const response = await axios.post('/api/handleToken', formObject);

      if (response.status === 200) {
        const data = response.data;
        setSubmitStatus(data.message);
        setName('');
        setEmail('');
        setMessage('');
        setSchedule('');
        setOther('');
        setIsLoading(false);
        setShowSuccessVideo(true);
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus({ errorMessage: 'Error sending message' });

    }
  };

  const getToken = async (token: string): Promise<void> => {
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
            setName(event.target.value);
            setSubmitStatus({ errorMessage: '' });
          }}
        />
        {submitStatus?.name && <div className="error">{submitStatus.name}</div>}
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
            setEmail(event.target.value);
            setSubmitStatus({ errorMessage: '' });
          }}
        />
        {submitStatus?.email && <div className="error">{submitStatus.email}</div>}
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
            setMessage(event.target.value);
            setSubmitStatus({ errorMessage: '' });
          }}
        ></textarea>
        {submitStatus?.message && <div className="error">{submitStatus.message}</div>}
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
            setSchedule(event.target.value);
            setSubmitStatus({ errorMessage: '' });
          }}
        />
        {submitStatus?.schedule && <div className="error">{submitStatus.schedule}</div>}
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
            setOther(event.target.value);
          }}
        ></textarea>
      </div>
      <button
        className="g-recaptcha"
        data-sitekey="6LdUyYwlAAAAAGaNvJAKC6916P2r9Qhl4jL47Ejk"
        data-callback="getToken"
        type="submit"
        disabled={submitStatus?.errorMessage !== '' || isLoading}
      >
        {isLoading ? (
          <TailSpin color="#00BFFF" height={20} width={20} ariaLabel="tail-spin-loading" radius="1"
          />
        ) : (
          "Lähetä"
        )}
      </button>
      {submitStatus?.errorMessage && <p>{submitStatus?.errorMessage}</p>}
      {showSuccessVideo && (
        <div className="overlay">
          <img className="success-gif" src="/success4.gif" alt="Submission Successful" />
          <p className="success-message">Viesti lähetetty</p>
        </div>
      )
      }
    </form>
  );
};

export default ContactForm;