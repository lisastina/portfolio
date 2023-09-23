import React from "react";

const EditProject = () => {
  return (
    <div className="projectPage editProject">
      {/* First section */}
      <div className="projectPage__hero">
        <div className="projektPage__herotext">
          <label htmlFor="title">Titel</label>
          <input
            maxlength="25"
            type="text"
            name="title"
            id="title"
            value="Hönö - en ö, en historia"
          />
          <label htmlFor="subtitle">Undertitel</label>
          <input
            maxlength="25"
            type="text"
            name="subtitle"
            id="subtitle"
            value="Fotobok"
          />
          <label htmlFor="description">Beskrivning</label>
          <textarea
            maxlength="230"
            name="description"
            id="description"
            cols="30"
            rows="8"
            value="En fotobok om min hem-ö Hönö och dess historia. Äldre foton tagna av
            min pappa, min farfar och foton från det lokala museets arkiv
            blandas med mina egna för att jämföra dåtid med nutid."
          ></textarea>
        </div>
        <div className="projectPage__heroimage">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </div>
      </div>

      {/* Content */}
      <div className="projectPage__content">
        <textarea
          maxLength="130"
          className="text"
          name="description"
          id="description"
          cols="30"
          rows="6"
          value="Alla nya foton är tagna av mig, redigerade i Adobe Lightroom och
            Photoshop. Layout skapad i InDesign."
        ></textarea>
        <div className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </div>

        <textarea
          maxLength="140"
          className="small text"
          name="description"
          id="description"
          cols="30"
          rows="4"
          value="Jag tryckte upp boken i liten upplaga för att dela med mig av till
            vänner och familj. Några få exemplar har sålts på Fiskemuseet på Hönö."
        ></textarea>
        <div className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </div>
        <div className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </div>
        <textarea
          className="text"
          name="description"
          id="description"
          cols="30"
          rows="5"
          value="Boken innehåller foton av ön Hönö i Öckerö kommun, som ligger i
            Göteborgs skärgård. Jag har samlat på mig gamla foton och återvänt
            till platsen de tagits för att kunna jämföra sida vid sida
            förändringarna som skett under åren. Boken innehåller även texter och
            dikter lånade från lokala skribenter."
        ></textarea>
        <div className="projectPage__image">
          <img src="/assets/fotobok_01.jpg" alt="fotobok" />
        </div>
      </div>
    </div>
  );
};
export default EditProject;
