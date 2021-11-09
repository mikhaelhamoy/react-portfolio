import React from 'react';
import myResume from "../../assets/resume/mikhael-hamoy-resume.pdf"

function Resume() {

  return (
    <section className="my-5">
      <h1>Resume</h1>
      <a className="downloadLink mx-2" href={myResume} download>Download resume</a>
      <div className="my-5 mx-2">
        <h4>Front-end Proficiency</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="my-5 mx-2">
        <h4>Back-end Proficiency</h4>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MOngoDB, Mongoose</li>
          <li>REST</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;