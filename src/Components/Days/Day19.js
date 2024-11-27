import React from "react";
import bouftou from "../../images/bouftou.png";

const Day19 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 19 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>
          Ca va botaient ? 
        </strong>
      </p>
      <p className="mt-2 text-lg">
        Aujourd'hui on est le 27/11 au moment où j'écris, tu viens demain soir car tu viens travailler sur angers.
      </p>
      <p className="mt-2 text-lg">
        et dimanche.... <b>C'EST LE PREMIER DECEMBRE</b>
      </p>
      <p className="mt-2 text-lg">
        ça veut donc dire qu'il me reste 2h (je vais chez léo et marine ce soir) aujourd'hui et ma pause du midi de demain pour finir le calendrier.
      </p>
      <p className="mt-2 text-lg">
        CA VA ETRE TENDU ALORS LA QUALITE DE LA SUITE RISQUE D'EN PATIR
      </p>
      <p className="mt-2 text-lg">
        Bref. le code d'aujourd'hui est assez simple à trouver. C'est le nom du jeu avec le quel je te casse les pieds probablement depuis le début du mois...
      </p>
      <p className="mt-2 text-lg">
        J'espère que tu me prends pas trop pour un gigantesque geek puant, mais à certaines périodes de l'années.... je suis un peu ça.
      </p>
      <img src={bouftou} alt="hihi" className="mt-4" />
    </div>
  );
};

export default Day19;
