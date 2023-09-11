import React from "react";
import ProjectList from "./ProjectList";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero__image">
          <img src="/assets/portrait.png" alt="Self portrait" />
        </div>
        <div className="hero__text">
          <h1>Lisa Stina</h1>
          <h2>Grafisk designer &amp; Front end developer</h2>
          <p>
            Jag är passionerad kreatör som kombinerar konst och teknik för att
            skapa vackra och användarvänliga digitala upplevelser. Jag brinner
            för att förmedla berättelser och skapa minnesvärda intryck vare sig
            det gäller design, illustration, webbutveckling eller fotografi.
          </p>
        </div>
      </div>

      {/* Projects list */}
      <ProjectList />
    </div>
  );
};

export default HomePage;
