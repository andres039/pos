import React, { ChangeEvent, useState } from "react";

type Cliente = Record<"cliente" | "caja", string>;

const clientes = [
  {
    value: "empleado",
    name: "Empleado",
  },
  {
    value: "medico",
    name: "Medico",
  },
  {
    value: "cuentas_por_cobrar",
    name: "CTS X Cobrar",
  },
  {
    value: "colaborador",
    name: "Colaborador - Otros",
  },
];

const cajas = ["Central", "Local"];

const Cliente = () => {
  const [selectedOption, setSelectedOption] = useState<Cliente>({
    cliente: "seleccione",
    caja: "",
  });

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption((prev) => {
      return { ...prev, cliente: event.target.value };
    });
  };

  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      <div className="p-2 flex-col">
        <h4 className="text-gray-500 font-bold text-md">Tipo Cliente</h4>
        <div className="py-6">
          <select
            className="w-full px-3 py-2 border border-gray-900 rounded-md  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            value={selectedOption.cliente}
            onChange={handleChange}
          >
            {clientes.map((cliente) => (
              <option key={cliente.value} value={cliente.value}>
                {cliente.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="p-2 flex-col">
        <h4 className="text-gray-500 font-bold text-md">Caja</h4>
        <div className="py-6">
          <select
            className="w-full px-3 py-2 border border-gray-900 rounded-md  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            value={selectedOption.caja}
            onChange={(event: ChangeEvent<HTMLSelectElement>) => {
              setSelectedOption((prev) => {
                return { ...prev, caja: event.target.value };
              });
            }}
          >
            {cajas.map((caja) => (
              <option key={caja} value={caja}>
                {caja}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="px-2 flex-col">
        <h4 className="text-gray-500 font-bold text-md">Cajero</h4>
        <div className="py-3">
          <p className="text-gray-800"> {selectedOption.caja}</p>
        </div>
      </div>
    </div>
  );
};

export default Cliente;
