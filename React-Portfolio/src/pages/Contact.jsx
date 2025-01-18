import React, { useState } from "react";
import "../styles/pages/_contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const mailtoLink = `mailto:thomasriou.35@gmail.com?subject=Message%20de%20${encodeURIComponent(
      name
    )}&body=Nom:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">
      <section className="contact-links">
        <h2>Retrouvez-moi sur les réseaux sociaux :</h2>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/thomas-riou-3a1b3b1b3/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/thomasR35"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>N'hésitez pas à me contacter !</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
