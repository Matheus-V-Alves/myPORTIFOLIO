import React, { useState } from "react";

const Education = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div
      id="education"
      className="EducationBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat bg-fixed text-white"
    >
      <div className="education-body-title text-3xl font-extrabold absolute right-10 top-10 font-mono  text-white-400">
        ..// Histórico Academico
      </div>
      <div className="flex w-9/12">
        {/* Sidebar */}
        <div className="w-1/7">
          <ul className="p-4">
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 1 ? "text-white-300" : ""
              }`} style={{color: '#4ECDC4'}}
              onClick={() => handleOptionClick(1)}
            >
              Superior
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80  ${
                selectedOption === 2 ? "text-white-300 " : ""
              }`} style={{color: '#4ECDC4'}}
              onClick={() => handleOptionClick(2)}
            >
              E. Médio
            </li>
            <li
              className={`cursor-pointer text-lg font-semibold p-3 mb-2 rounded bg-black/60 hover:bg-black/80 ${
                selectedOption === 3 ? "text-white-300 " : ""
              }`} style={{color: '#4ECDC4'}}
              onClick={() => handleOptionClick(3)}
            >
              Fundamental
            </li>
          </ul>
        </div>
        {/* Content Box */}
        <div className="flex-1 p-4 w-auto">
          {selectedOption === 1 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Bacharelado em Engenharia de SOFTWARE
                </div>
                <div className="d-address text-lg">
                 O curso de Engenharia de Software capacita profissionais para projetar, desenvolver e gerenciar sistemas e aplicações de software, com foco em qualidade, inovação e eficiência. Abrange técnicas de programação, arquitetura de sistemas, metodologias ágeis e engenharia de requisitos.
                <br />
                 São Paulo, Brasil
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Instituição de ensino:
                  </div>
                  <div className="d-major-text text-lg">
                    FIAP
                  </div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="https://www.fiap.com.br/?gad_source=1&gclid=Cj0KCQjwpP63BhDYARIsAOQkATZ3nlTZeM1YYJ1pst3h1u9ZE79Hq6Umqee85VZqooirNO62qmSY5WIaAnC9EALw_wcB"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Duração:
                  </div>
                  <div className="text-lg">4 Anos</div>
                  <div className="text-base">2024-2028</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    Périodos:
                  </div>
                  <div className="text-lg">1º- média 9.29 </div>
                  <div className="text-lg">2º- média 9.69 </div>
                  <div className="text-lg">3º- média 8.87 </div>
                  <div className="text-lg">4º- média em curso </div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 2 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
              <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
                <div className="d-title text-3xl font-semibold  text-amber-300">
                  Ensino Médio
                </div>
                <div className="d-address text-lg">
                É a base para a educação superior e o ingresso no mercado de trabalho.
                  <br /> Recife, Brasil.
                </div>
              </div>
              <div className="degree-extra flex justify-between">
                <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                  <div className="d-major-title text-3xl font-medium  text-amber-300">
                    Instituição de Ensino:
                  </div>
                  <div className="d-major-text text-lg">EAR- Escola de Aplicação do Recife</div>
                  <div className="d-major-link text-blue-400">
                    <a
                      href="https://www.instagram.com/escolaaplicacaorecifeoficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="section under development"
                    >
                      Saiba Mais
                    </a>
                  </div>
                </div>
                <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                  <div className="text-3xl font-medium  text-amber-300">
                    Duração:
                  </div>
                  <div className="text-lg">3 Anos</div>
                  <div className="text-base">2021-2023</div>
                </div>
                <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                  <div className="text-3xl font-medium  text-amber-300">
                    Anos de conclusão:
                  </div>
                  <div className="text-lg">1º - 2021</div>
                  <div className="text-lg">2º - 2022</div>
                  <div className="text-lg">3º - 2023</div>
                </div>
              </div>
            </div>
          )}
          {selectedOption === 3 && (
            <div className="h-full w-full backdrop-blur-sm bg-black/40 pt-10 pb-10 pr-6 pl-6 flex flex-col gap-6">
            <div className="degree flex flex-col gap-2 bg-black/50 rounded-lg p-4">
              <div className="d-title text-3xl font-semibold  text-amber-300">
                Ensino Fundamental
              </div>
              <div className="d-address text-lg">
              Escola refência de ensino estudual em Pernambuco, 2º melhor escola pública do P.
                <br /> Recife, Brasil.
              </div>
            </div>
            <div className="degree-extra flex justify-between">
              <div className="d-major flex flex-col gap-2 bg-black/70 rounded-lg p-4">
                <div className="d-major-title text-3xl font-medium  text-amber-300">
                  Instituição de Ensino:
                </div>
                <div className="d-major-text text-lg">EAR- Escola de Aplicação do Recife</div>
                <div className="d-major-link text-blue-400">
                  <a
                    href="https://www.instagram.com/escolaaplicacaorecifeoficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="section under development"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
              <div className="d-tenure flex flex-col gap-2 bg-black/70 rounded-lg pt-4 pb-4 text-center pr-12 pl-12">
                <div className="text-3xl font-medium  text-amber-300">
                  Duração:
                </div>
                <div className="text-lg">4 Anos</div>
                <div className="text-base">2017-2020</div>
              </div>
              <div className="d-grades flex flex-col gap-2 bg-black/70 rounded-lg p-4 text-right">
                <div className="text-3xl font-medium  text-amber-300">
                  Anos de conclusão:
                </div>
                <div className="text-lg">6º - 2017</div>
                <div className="text-lg">7º - 2018</div>
                <div className="text-lg">8º - 2019</div>
                <div className="text-lg">9º - 2020 </div>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Education;
