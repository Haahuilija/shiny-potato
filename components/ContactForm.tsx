import React, { useState } from 'react';
import axios from 'axios';
import handleToken from '../pages/api/handleToken';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [schedule, setSchedule] = useState('');
  const [other, setOther] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, token: string) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
      schedule,
      other,
      token
    };
  
    try {
      const response = await axios.post('/api/handleToken', formData);
      if (response.status === 200) {
        const data = response.data;
        setSubmitStatus(data.message);
        setName('');
        setEmail('');
        setMessage('');
        setSchedule('');
        setOther('');
      } else {
        throw new Error('Error sending message');
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus('Error sending message');
    }
  };
  
  const getToken = (token: string) => {
    console.log("Token:", token);
    return token;
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const token = await getToken('');
    handleFormSubmit(e, token);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nimi:</label>
        <input
          type="text"
          className="form-control form-input"
          id="name"
          placeholder="Etunimi Sukunimi"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Sähköposti:</label>
        <input
          type="email"
          className="form-control form-input"
          id="email"
          placeholder="Sähköpostiosoite johon haluatte meidän vastaavan"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Millainen teksti kyseessä:</label>
        <textarea
          className="form-control form-input"
          id="message"
          rows={8}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="schedule">Aikataulu:</label>
        <input
          type="text"
          className="form-control form-input"
          id="schedule"
          placeholder="Esim. Kahden viikon sisään, 10.9 mennessä"
          value={schedule}
          onChange={(event) => setSchedule(event.target.value)}
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
          onChange={(event) => setOther(event.target.value)}
        ></textarea>
      </div>
      <button
        className="g-recaptcha"
        data-sitekey="6Letzo8lAAAAAEV5hmLvRtKRenOEkLy8p0cgfh8A"
        data-callback={getToken}
        type="submit">
        Lähetä
      </button>
      {submitStatus && <p>{submitStatus}</p>}
    </form>
  );
};

export default ContactForm;