import React from "react";
import roumaine from "../../images/roumaine.jpg";

const Day11 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">Jour 11 ! ♥</p>
      <p className="mt-2 text-md">
        <strong>Salut toi Esmeralda 💎</strong>
      </p>
      <p className="mt-2 text-lg">
        Essaie un peu de trouver le mot de passe d'aujourd'hui, génie que tu es.
      </p>
      <p className="mt-2 text-lg">
        <strong>R</strong>ien ne se joue sans la lumière du matin,{" "}
        <strong>o</strong>u peut-être que ce vieux synthé pourrait t’aider à
        entendre. <strong>U</strong>ne mandoline perdue dans l'ombre d’un
        Concertmate-400. <strong>M</strong>ais ce son étrange… quel mystère,
        comme un secret à découvrir. <strong>A</strong>s-tu remarqué ? Une
        mélodie se cache dans ce chaos. <strong>I</strong>l suffit de suivre les
        notes pour voir que tout prend sens. <strong>N</strong>e t’arrête pas
        avant d’avoir trouvé la clé, elle est là, quelque part.{" "}
        <strong>E</strong>t si tu regardes bien, tu sais où chercher…
      </p>
      <img src={roumaine} alt="Roumaine" className="mt-4" />
      <i>- "Je suis régulièrement victime du célèbre racisme anti blanc."</i>
    </div>
  );
};

export default Day11;
