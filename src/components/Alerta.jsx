import React from "react";

const Alerta = ({children}) => {
  return (
    <div className="text-center my-4 text-white bg-red-600 font-bold p-3">
      {children}
    </div>
  );
};

export default Alerta;
