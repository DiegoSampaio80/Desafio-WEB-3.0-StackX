import React from "react";
import './App.css'
import Button from "./components/Button/Button";
import { useState } from "react";
import bandeiraBrasil from "./assets/img/bandeira_brasil.png";
import bandeiraEua from "./assets/img/bandeira_eua.png";
import bandeiraEspanha from "./assets/img/bandeira_espanha.png";
import logoStackx from "./assets/img/logo_stackx.png";


function App() {
 
  const tecnologias = ["JavaScript", "ReactJS", "VueJS", "AngularJS", "PHP", "Styled Components", "HTML", "CSS", "Tailwind CSS", "SASS",];
  
  const [frase, setFrase] = useState(`Olá. Meu nome é Diego Sampaio, e sou desenvolvedor front-end. Tecnologias que tenho experiência:`);
  const fraseFormatada = frase.replace('Diego Sampaio', '<strong>Diego Sampaio</strong>');
  let fraseFormatada2 = fraseFormatada.replace('desenvolvedor front-end', '<strong>desenvolvedor front-end</strong>');

  const handleclickPortugues = () => {
    setFrase('Olá. Meu nome é Diego Sampaio, e sou desenvolvedor front-end. Tecnologias que tenho experiência:');
  }
  const handleclickIngles = () => {
    setFrase('Hello. My name is Diego Sampaio, and I\'m a front-end developer. Technologies I have experience:');
  }
  const handleclickEspanhol = () => {
    setFrase('Hola. Mi nombre es Diego Sampaio, y soy Desarrollador front-end. Tecnologías en las que tengo experiencia:');
  }

  return (
   
    <>
      <div className="body">
        <div className="header">
          <div className="molduraLogo">
            <img src={logoStackx} alt=''/>
          </div>
        </div>
        <section className="fraseContainer">
          <h1>Desafio Web 3.0 React e Styled Components</h1>
          <p dangerouslySetInnerHTML={{ __html: fraseFormatada2 }} />
        </section>
        <section className="sectionTecnologias">
          <div className="tecnologiasContainer">
            <ul className="lista">
              {tecnologias.map((tecnologia, index) => <li key={index}>{tecnologia}</li>)}
            </ul>
          </div>
        </section>
        {/* <Nome>Diego</Nome> */}
        <section className="buttonsContainer">
          <Button idioma="Português" bandeira={bandeiraBrasil} clickFunction={handleclickPortugues}></Button>
          <Button idioma="Inglês" bandeira={bandeiraEua} clickFunction={handleclickIngles}></Button>
          <Button idioma="Espanhol" bandeira={bandeiraEspanha} clickFunction={handleclickEspanhol}></Button>
        </section>
      </div>
    </>
  );
}

export default App;