import React from 'react';

const Contact = () => {

  return (
    <div className="content contact">
      <div className="section">
        <div className="contact-item">
          <a href="mailto:zachary@zacharydfriedman.com">
            <i className="fas fa-envelope-square" />
          </a>
          <p>Zachary@ZacharyDFriedman.com</p>
        </div>
      </div>

      <div className="section">
        <div className="contact-item">
          <a href="tel:15135032307">
            <i className="fas fa-phone-square" />
          </a>
          <p>513.503.2307</p>
        </div>
      </div>

      <div className="section">
        <div className="contact-item">
          <a href="https://github.com/ZacharyDudley/">
            <i className="fab fa-github-square" />
          </a>
          <p>GitHub User: ZacharyDudley</p>
        </div>
      </div>

      <div className="section">
        <div className="contact-item">
          <a href="https://www.linkedin.com/in/zacharydfriedman/">
            <i className="fab fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
