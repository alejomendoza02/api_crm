import React from "react";
import Formulario from "../components/Formulario";

const NuevoCliente = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-10"> Llena los siguientes campos para registrar un cliente</p>
      <Formulario/>
    </>
  );
};

export default NuevoCliente;
