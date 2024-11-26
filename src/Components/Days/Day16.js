import React from "react";
import joselito from "../../images/joselito.png";

const Day16 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 16 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>
          Salut à toi jeune chasseuse de vyniles collector.
        </strong>
      </p>
      <p className="mt-2 text-lg">
        Sauras tu me rappeler le nom de cet adufant, ou bien encore cet endulte qui a, selon moi, quarante douze ans ?
      </p>
      <img src={joselito} alt="hihi" className="mt-4" />
    </div>
  );
};

export default Day16;
