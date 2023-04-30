import React from "react";

const estaciones = ["Sotano", "Primer piso", "Segundo piso"];
const Estacion = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      <div className="p-2 ">
        <h4 className="text-gray-500 font-bold text-md">Estacion</h4>
        <div className="py-6 flex align-middle">
          <select
            className="w-full px-3 py-2 border border-gray-900 rounded-md
            focus:ring-blue-500 focus:border-blue-500 text-gray-900"
          >
            {estaciones.map((estacion) => (
              <option key={estacion} value={estacion}>
                {estacion}
              </option>
            ))}
          </select>
        </div>
        </div>
        <div className="py-2">
          <h4 className="text-gray-500 font-bold text-md">Cliente</h4>
          <div className="py-3 mt-2 flex align-middle">
            <input className="w-full text-gray-900 px-3 py-2 border border-gray-600 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500"></input>
          </div>
        </div>

    </div>
  );
};

export default Estacion;
