import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div
      className="AboutBody flex justify-center items-center gap-2.5 relative h-screen
       w-full text-white font-bold bg-cover bg-no-repeat"
      id="about"
    >
      <div className="wrapper flex h-4/5 w-5/6">
        <div className="about-body-left h-full w-1/2 flex items-center justify-center"></div>
        <div className="about-body-right h-full w-1/2 flex flex-col gap-10 items-center justify-center">
          <div className="about-body-right-title h-10 flex items-center justify-center text-3xl  text-blue-400">
            Sobre mim:{" "}
          </div>
          <div className="about-body-right-content h-auto flex items-center justify-center text-justify">
          Sou apaixonado por tecnologia e estou sempre em busca de aprender novas ferramentas e linguagens que ampliem meus conhecimentos. Tenho um grande interesse em desenvolvimento web e design, onde posso transformar ideias em interfaces funcionais e atraentes. No meu tempo livre, gosto de jogar FPS, praticar esportes e exercícios físicos, e acompanhar a Fórmula 1, uma das minhas maiores paixões. Gosto de encarar desafios que me tiram da zona de conforto e me ajudam a evoluir tanto pessoal quanto profissionalmente.
          </div>
          <Link to="/resume">
            {" "}
            <div
              className="g-btn-2 hover:scale-110"
              title="Click to view Resume"
            >
              Currículo
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
