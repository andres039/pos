import React from "react";

const Explicacion = () => {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 gap-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-4">
      <h4 className="text-gray-800 font-bold text-lg">Explanation</h4>
      <p className="text-gray-800 text-lg">
        {" "}
        The left-hand column provides an overview of the appearance of this
        Point of Sale application. By selecting the "Factura" button, an object
        is generated, which can then be viewed in the console.
      </p>
    </div>
  );
};

export default Explicacion;
