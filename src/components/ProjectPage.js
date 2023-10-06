import React from "react";

const ProjectPage = () => {
  return (
    <div className="projectPage">
      {/* First section */}
      <div className="projectPage__hero">
        <div className="projektPage__herotext">
          <h1>Hönö - En ö en historia</h1>
          <h2>Fotobok</h2>
          <p>
            En fotobok om min hem-ö Hönö och dess historia. Äldre foton tagna av
            min pappa, min farfar och foton från det lokala museets arkiv
            blandas med mina egna för att jämföra dåtid med nutid.
          </p>
        </div>
        <figure className="projectPage__heroimage">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </figure>
      </div>

      {/* Content */}
      <div className="projectPage__content">
        <p className="text">
          Alla nya foton är tagna av mig, redigerade i Adobe Lightroom och
          Photoshop. Layout skapad i InDesign.
        </p>
        <figure className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </figure>

        <p className="small text">
          Jag tryckte upp boken i liten upplaga för att dela med mig av till
          vänner och familj. Några få exemplar har sålts på Fiskemuseet på Hönö.
        </p>
        <figure className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </figure>
        <figure className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </figure>
        <p className="text">
          Boken innehåller foton av ön Hönö i Öckerö kommun, som ligger i
          Göteborgs skärgård. Jag har samlat på mig gamla foton och återvänt
          till platsen de tagits för att kunna jämföra sida vid sida
          förändringarna som skett under åren. Boken innehåller även texter och
          dikter lånade från lokala skribenter.
        </p>
        <figure className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </figure>
      </div>
    </div>
  );
};
export default ProjectPage;
