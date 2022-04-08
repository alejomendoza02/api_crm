import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    setCargando(!cargando);

    const getClientAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const answer = await fetch(url);
        const result = await answer.json();
        setCliente(result);
      } catch (error) {
          console.log(error)
      }
      setCargando(!cargando);
    };
    getClientAPI();
  }, []);

  return (cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length !== 0 ? (
    <div>
      <p className="text-4xl text-gray-700">
        <span className="text-gray-700 uppercase font-bold">Cliente: </span>
        {cliente.nombre}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="text-gray-700 uppercase font-bold">Email: </span>
        {cliente.email}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="text-gray-700 uppercase font-bold">Telefono: </span>
        {cliente.telefono}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="text-gray-700 uppercase font-bold">Empresa: </span>
        {cliente.empresa}
      </p>
      <p className="text-2xl text-gray-700">
        <span className="text-gray-700 uppercase font-bold">Notas: </span>
        {cliente.notas}
      </p>
    </div>
  ) : (
    <p>No hay resultados</p>
  ));
};

export default VerCliente;
