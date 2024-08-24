import React, { useState } from 'react';
import './Contact.css';
import bImage from './b.jpg'; // Import the image file

const Contact = () => {
  // State pour gérer les champs du formulaire
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tu pourrais envoyer les données à une API ici

    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Réinitialiser le formulaire
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);
  };
  const style = {
    backgroundImage: `url(${bImage})`,
    backgroundSize: 'cover',      // Ensures the image covers the whole container
    backgroundPosition: 'center', // Centers the image in the container
    height: '100vh',              // Set the height for the container
    width: '100%'                 // Set the width to cover the full container width
  };

  return (
    <div style={style}>
     <h2 style={{marginTop:'20px'}}>
  <i className="bi bi-person-lines-fill" style={{ marginRight: '14px' }}></i>
  Contact Us
</h2>

      {submitted ? (
        <p className='para'>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
