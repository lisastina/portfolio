import React from "react";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="contactPage__text">
        <h1>Hör av dig!</h1>
        <a href="mailto: lisastina.hansson@gmail.com">
          lisastina.hansson@gmail.com
        </a>
      </div>
      <figure className="contactPage__image">
        <img src="/assets/letter-bird.png" alt="bird with letter" />
      </figure>
    </div>
  );
};
export default ContactPage;
