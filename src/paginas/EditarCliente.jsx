import Formulario from "../components/Formulario";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const answer = await fetch(url);
        const result = await answer.json();
        setCliente(result);
      } catch (error) {
        console.log(error);
      }
      setCargando(!cargando);
    };
    getClientAPI();
  }, []);
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
      <p className="mt-10">
        Utilizar este formulario para editar datos de un cliente
      </p>
      {cliente?.nombre ? <Formulario cliente={cliente} cargando={cargando} /> : <p>Cliente ID no válido</p>}
    </>
  );
};

export default EditarCliente;
