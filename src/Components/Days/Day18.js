import React from "react";
import voldy from "../../images/voldy.png";

const Day18 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 18 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>
          QUESTION LORD OF THE RINGS
        </strong>
      </p>
      <p className="mt-2 text-lg">
        Ouais j'ai envie de le matter en ce moment alors je suis obsessed, hier c'était gandalf maintenant c'est autre chose.
      </p>
      <p className="mt-2 text-lg">
        Comment s'appellerait voldemort s'il était plus sympa ? <i>(ouais j'ai menti pour lord of the rings)</i>
      </p>
      <p className="mt-2 text-lg">
        exemple : Harry s'appellerait "n'apasderiz"
      </p>
      <p className="mt-2 text-lg">
        exemple 2 : Cho s'appellerait "froid"
      </p>
      <p className="mt-2 text-lg">
        exemple 3 : Lupin s'appellerait "palu..."" euh non ça marche pas c'est quoi le contraire du pain ?
      </p>
      <img src={voldy} alt="hihi" className="mt-4" />
    </div>
  );
};

export default Day18;
