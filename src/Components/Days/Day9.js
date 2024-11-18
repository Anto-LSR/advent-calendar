import React from "react";
import nousImage from "../../images/nous.jpeg";

const Day9 = () => {
  return (
    <div className="p-4">
      <p className="text-2xl font-bold">🎉 Jour 9 ! 🎉</p>

      <p className="mt-2 text-md">
        <strong>
          Eh, figures toi qu'aujourd'hui ça fait trois mois qu'on s'est
          rencontré.
        </strong>
      </p>
      <p className="mt-2 text-lg">
        Depuis le 9 septembre je suis encore plus heureux que je ne l'étais, et
        je suis très reconnaissant de t'avoir dans ma vie. Je t'aime. ♥
      </p>
      <p className="mt-2 text-lg">
        Pour fêter ça, <strong>je t'emmène à Pornic </strong>un soir et on se
        fait un restau en bord de mer. 🌊
      </p>
      <p>
        Le code est simple, c'est ce qu'à dit Claire à propos de ton écharpe. le
        code doit être un hashtag... #....
      </p>

      <img src={nousImage} alt="Deux glands dans le froid" className="mt-4" />
      <p className="text-xl">💘</p>
    </div>
  );
};

export default Day9;
