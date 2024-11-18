import React from "react";
import yudo from "../../images/yudo.jpg";

const Day10 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 10 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>Bonjour, tu es, à mes humbles yeux, le sang au niveau d'la veine.</strong>
      </p>
      <p className="mt-2 text-lg">
        Sauras tu résoudre cette énigme puante ?
      </p>
      <i>
        Sous une lumière blafarde, un chemin s'étire, 
        Le vent s’y tait, mais les odeurs s’y respirent. 
        Un lieu de passage où l'air parfois trahit, 
        Un témoin discret des traces de la nuit. 
        C'est là que rôde une âme à quatre pattes, 
        Qui y laisse parfois des indices délicats. 
        Entre la chambre et le reste, il se tient droit, 
        Quel est ce lieu où tu passes chaque fois ?
      </i>
      <p className="mt-2 text-lg">
        Allez tarplu jeune frère insolent, tié mon gâté.
      </p>
      <img src={yudo} alt="Deux glands dans le froid" className="mt-4" />
      <i>- "g chié"</i>
    </div>
  );
};

export default Day10;
