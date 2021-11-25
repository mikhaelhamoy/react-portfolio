import React from 'react';
import avatarImage from "../../assets/avatar/avatar.jpg";

function About() {
  return (
    <section className="my-5">
      <h1>About me</h1>
      <img src={avatarImage} className="my-2" style={{ width: "25%" }} alt="cover" />
      <p>
        Full Stack Web Developer
      </p>
      <p>
        University of Toronto School of Continuing Studies Coding Bootcamp Graduate
      </p>
    </section>
  );
}

export default About;