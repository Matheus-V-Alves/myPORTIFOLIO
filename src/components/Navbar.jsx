import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navBar sticky top-0 w-full flex justify-between px-12 py-5 bg-black text-amber-400">
      <div className=" text-3xl flex gap-2 text-black-400">
        
        <span className="font-bold font-dancingScript" style={{color: '#A3E6DE'}}>{"<MatheusAlves/>"} </span>
      </div>

      <div className="w-auto">
        <div className="flex gap-6 text-lg font-semibold">
          {/* <div className="btn cursor-pointer home hover:border-b-4 border-red-600 rounded-md">
            {" "}
            <a href="#home" rel="noopener noreferrer">
              Home
            </a>
          </div> */}
          <div className="btn cursor-pointer about hover:border-b-4 border-white-600 rounded-md" style={{color: '#4ECDC4'}}>
            <a href="#about" rel="noopener noreferrer">
              Sobre
            </a>
          </div>
          <div className="btn cursor-pointer education hover:border-b-4 border-white-600 rounded-md" style={{color: '#4ECDC4'}}>
            {" "}
            <a href="#education" rel="noopener noreferrer">
              Formação
            </a>
          </div>
          <div className="btn cursor-pointer skills hover:border-b-4 border-white-600 rounded-md" style={{color: '#4ECDC4'}}>
            {" "}
            <a href="#skills" rel="noopener noreferrer">
              Skills
            </a>
          </div>
          <div className="btn cursor-pointer projects hover:border-b-4 border-white-600 rounded-md" style={{color: '#4ECDC4'}}>
            {" "}
            <a href="#projects" rel="noopener noreferrer">
              Projetos
            </a>
          </div>
          <div className="btn cursor-pointer contact hover:border-b-4 border-white-600 rounded-md" style={{color: '#4ECDC4'}}>
            {" "}
            <a href="#contact" rel="noopener noreferrer">
              Contato
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
