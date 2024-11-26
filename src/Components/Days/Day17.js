import React from "react";
import fromton from "../../images/fromton.png";

const Day17 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 17 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>
          Bonjour sublime avion que tu es.
        </strong>
      </p>
      <p className="mt-2 text-lg">
        Si Gandalf était un fromage, lequel serait-il ?
      </p>
      <p className="mt-2 text-lg">
        Et surtout on l'appellerait "Gandalf le ... " ?
      </p>
      <img src={fromton} alt="hihi" className="mt-4" />
    </div>
  );
};

export default Day17;
