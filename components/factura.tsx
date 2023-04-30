import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import DatePicker from "react-datepicker";

type Data = Record<
  "tipo" | "date" | "cds", {
      credito: boolean;
      contado: boolean;
    } | Date | string
>;

const Factura: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [datosFactura, setDatosFactura] = useState<Data>({
    tipo: {
      credito: true,
      contado: false,
    },
    date: new Date(),
    cds: "option1",
  });

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    setDatosFactura({ ...datosFactura, date: selectedDate as Date });
  };

  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      <div className="p-2 flex-col">
        <h4 className="text-gray-500 font-bold text-md">Tipo Factura</h4>
        <div className="flex items-center my-4">
          <input
            type="radio"
            value="credito"
            name="default-radio"
            checked={datosFactura.tipo.credito ?? false}
            className="w-4 h-4 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 "
            onChange={() =>
              setDatosFactura({
                ...datosFactura,
                tipo: { contado: false, credito: true },
              })
            }
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            Credito
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            value="contado"
            checked={datosFactura.tipo.contado ?? false}
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 "
            onChange={() =>
              setDatosFactura({
                ...datosFactura,
                tipo: { contado: true, credito: false },
              })
            }
          />
          <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">
            Contado
          </label>
        </div>
      </div>
      <div className="p-2 flex-col align-middle">
        <h4 className="text-gray-500 font-bold text-md ">Fecha</h4>
        <div className="flex-col align-middle py-5">
          <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={handleDateChange}
            className="w-full text-gray-900 px-3 py-2 border border-gray-600 rounded-md shadow-sm  focus:ring-blue-500 focus:border-blue-500"
            placeholderText="Select a date"
          />
        </div>
      </div>
      <div className="p-2 flex-col align-middle">
        <h4 className="text-gray-500 font-bold text-sm">CDS</h4>
        {/* <input className="border w-full border-gray-600 rounded-md shadow-sm px-3 py-1 mt-6" placeholder="CDS" /> */}
        <div className="flex-col align-middle  py-6">
          <select
            className="w-full px-3 py-2 border border-gray-900 rounded-md  focus:ring-blue-500 focus:border-blue-500 text-gray-900"
            onChange={(event) =>
              setDatosFactura({ ...datosFactura, cds: event.target.value })
            }
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </select>
        </div>
      </div>
      <div className="p-2 flex-col">
        <button
          className="w-full whitespace-nowrap bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => console.log("DatosFactura:", datosFactura)}
        >
          Factura
        </button>
        <button className="w-full whitespace-nowrap bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-4 px-4 rounded">
          Nota Credito
        </button>
      </div>
    </div>
  );
};

export default Factura;
