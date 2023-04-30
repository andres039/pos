import React from "react";

const fields = [
  { title: "Subtot(E.)" },
  { title: "Desc(E." },
  { title: "Articulos" },
  { title: "Total" },
  { title: "Saldos" },
  { title: "Descuento" },
  { title: "Pago" },
  { title: "Cambio" },
  { title: "Subtotal" },
  { title: "ITBM" },
];
const Total = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-4 gap-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      {fields.map((field) => (
        <div key="field.title">
          <h4 className="text-gray-500 font-bold text-md">{field.title}</h4>
          <input  disabled placeholder="0" className="border max-w-full" ></input>
        </div>
      ))}
      <button className="w-full whitespace-nowrap bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Metodo de Pago
      </button>
      <button className="w-full whitespace-nowrap bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
        Guardar
      </button>
      total
    </div>
  );
};

export default Total;
