import React from "react";
import "./Estilos.css";
import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos() {
  let myStyles = {
    borderRadius: ".5rem",
    margin: "2rem auto",
    maxWidth: "50%"
  }
  return (
    <>
      <section className="estilos">
        <h2>Estilos ccs en React</h2>
        <h3 className="bg-react">Estilos en hoja css externa</h3>
        <h3
          className="bg-react"
          style={{ borderRadius: ".25rem", margin: "1rem" }}
        >
          Estilos en linea (atributo Style)
        </h3>
        <h3 className="bg-react" style={myStyles} >Estilos en linea (atributo Style)</h3>
        <h3 className="bg-react">
          Agregando con Normalize
          <code>@import-normalize;</code>
        </h3>
        <h3 className={moduleStyles.error} >Estilos con módulos</h3>
        <h3 className={moduleStyles.success} >Estilos con módulos</h3>
        <h3 className="bg-sass" >Estilos SASS</h3>
      </section>
    </>
  );
}
