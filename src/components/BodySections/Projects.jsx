import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCode } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="projects"
      className="AboutBody grid grid-cols-2 gap-8 py-12 px-20 h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-black"
    >
      <div className=" bg-black/50 relative rounded text-xl text-white cursor-pointer">
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image absolute top-0 left-0 w-full h-full" />
          {isHovered && (
            <div className="card-overlay absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center gap-5 opacity-0">
              <div className="font-bold">
                Projeto de popularização da Formula E, em parceria com a FIAP.
              </div>
              <div className="links flex items-center justify-center gap-5">
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center hover:bg-cyan-400 hover:text-black"
                  href="https://challenge-formula-e.github.io/Sprint-WebDev-e-front/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faEye} />
                  Visualizar site
                </a>
                <a
                  className="card-button p-3 rounded-lg bg-green-600 font-semibold flex gap-2 items-center  hover:bg-cyan-400 hover:text-black"
                  href="https://github.com/Challenge-Formula-E/Sprint-WebDev-e-front"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faCode} />
                  Código
                </a>
              </div>
              <div className="text-xs flex flex-col gap-1 items-center">
                <span> Feito em : JavaScript XML, Vanilla CSS, TypeScript, Tailwind</span>
                <span>Tools: React router, RestAPI</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-cyan-400 cursor-pointer">
        Em breve
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-cyan-400 cursor-pointer">
        Em breve
      </div>
      <div className="bg-black/50 rounded flex items-center justify-center font-semibold text-xl text-white hover:bg-black/80 hover:text-cyan-400 cursor-pointer">
        Em Breve
      </div>
    </div>
  );
};

export default Projects;
