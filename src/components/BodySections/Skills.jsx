import React from "react";

const Skills = () => {
  return (
    <div
      className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
      id="skills"
    >
      <div style={{color: '#A3E6DE'}} className="skills-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-white-400">
        
        ..// skills
      </div>

      <div className="flex w-9/12 gap-16 justify-center items-center">
        <div className="skill-sec1 flex flex-col text-left gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
          <span style={{color: '#A3E6DE'}} className="text-3xl font-bold border-b-2 border-cyan-400 p-2 text-amber-400">
            Web Technologies
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript-ES6</li>
            <li>React</li>
            <li>Vue</li>
            <li>TailWindCSS</li>
            <li>Bootstrap</li>
            <li>Next js</li>
            <li>Python</li>
            <li>SQL</li>

          </ul>
        </div>
        <div className="skill-sec2 flex flex-col text-center gap-5 pt-6 pb-6 pr-12 pl-12 rounded bg-white/10 hover:bg-black/40">
          <span  style={{color: '#A3E6DE'}} className="text-3xl font-bold border-b-2 border-cyan-400 p-2 text-amber-400">
            Tools
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>Git, Github</li>
            <li>Vite.js</li>
            <li>UI bibliotec</li>
            <li>Figma</li>
            <li>Jupyter notebook</li>  
            <li>pycharm</li>
            <li>G coolab</li>
            <li>WireShark</li>
            <li>Intellij</li>
            <li>Visual Studio Code</li>
            <li>OracleDB</li>
          </ul>
        </div>
        <div className="skill-sec3 flex flex-col text-right gap-5 pt-6 pb-6 pr-10 pl-10 rounded bg-white/10 hover:bg-black/40">
          <span  style={{color: '#A3E6DE'}} className="text-3xl font-bold border-b-2 border-cyan-400 p-2 text-amber-400">
            Others
          </span>
          <ul className="flex flex-col gap-1 font-semibold text-base text-lime-50">
            <li>React Router</li>
            <li>Database</li>
            <li>Inglês B2</li>
            <li>Google/Microsoft Workspace</li>
            <li>Critical Thinking</li>
            <li>Multi-tarefas</li>
            <li>Adaptabilidade</li>
            <li>Criatividade</li>
            <li>Trabalho em equipe</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
