import React from "react";
import logo from "./logo.svg";
import Componente from "./component/Componente";
import Propiedades from "./component/Propiedades";
import Estado from "./component/Estado";
import Renderizado from "./component/Renderizado";
import RenderizadoElementos from "./component/RenderizadoElementos";
import {EventosES6, EventosES7, MasEventos} from "./component/Eventos";
import ComunicacionComponentes from "./component/ComunicacionComponentes";
import CicloVida from "./component/CicloVida";
import AjaxApis from "./component/AjaxApis";
import ContadorHooks from "./component/ContadorHooks";
import ScrollHooks from "./component/ScrollHooks";
import RelojHooks from "./component/RelojHooks";
import AjaxHooks from "./component/AjaxHooks";
import HooksPersonalizados from "./component/HooksPersonalizados";

import "./App.css";
import Referencias from "./component/Referencias";
import Formularios from "./component/Formularios";
import Estilos from "./component/Estilos";

function App() {
  let auth = true;
  let estaciones = ["primavera", "verano", "otoño", "invierno"];
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editar <code>src/App.js</code> and save to reload.
          </p>
          <p>{auth ? "Estás dentro" : "No estás dentro"}</p>
            <ul>
              {estaciones.map((el, index) => (
                <li key={index}>{el}</li>
                ))}
            </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </section>
        <section>
          <AjaxApis/>
          <hr/>
          <Componente msg="Hola"></Componente>
          <hr />
          <Propiedades 
          cadena="Cadena de texto" 
          numero={24} 
          boolean={true}
          arreglo={[1,2,3]}
          objeto={{nombre:"Alfonso", correo:"acr@gmail.com"}}
          funcion={num => num*num} 
          elementoReact={<i>Esto es un elemento react</i>}
          componenteReact={<Componente msg="Soy un componente pasado como prop"></Componente>}
          />
          <hr/>
          <Estado></Estado>
          <hr/>
          <Renderizado></Renderizado>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
          <ContadorHooks titulo="Gatos" />
          <hr/>
          <ScrollHooks/>          
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizados/>
          <hr/>
          <Referencias/>
          <hr/>
          <Formularios/>
          <hr/>
          <Estilos/>
        </section>
      </header>
    </div>
  );
}

export default App;
