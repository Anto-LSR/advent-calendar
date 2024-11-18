import React, { useState, useEffect, useCallback } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import DayContent from "./Components/DayContent";

// Set the root element for the modal
Modal.setAppElement("#root");

const App = () => {
  const [days] = useState(
    Array.from({ length: 24 }, (_, i) => ({
      day: i + 1,
      date: `${String(i + 1).padStart(2, "0")}/12/2024`,
    }))
  );
  const [displayMode, setDisplayMode] = useState("modal");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentDay, setCurrentDay] = useState(null);
  const [progression, setProgression] = useState([]);
  const [currentDate, setCurrentDate] = useState(getCurrentDate());
  const [customModalContent, setCustomModalContent] = useState(null);
  const [customModalTitle, setCustomModalTitle] = useState(null);

  // Returns current date in DD/MM/YYYY format for testing purposes
  function getCurrentDate() {
    // return new Date().toLocaleDateString("fr-FR");
    return "24/12/2024"; // Adjust this for testing
  }

  useEffect(() => {
    setCurrentDate(getCurrentDate());
    const savedProgression =
      JSON.parse(localStorage.getItem("progression")) || [];
    setProgression(savedProgression);
  }, []);

  const openModal = useCallback((day) => {
    setCurrentDay(day);
    setCustomModalContent(null);
    setModalIsOpen(true);
  }, []);

  const openCustomModal = useCallback((content) => {
    setCustomModalContent(content);
    setCurrentDay(null);
    setModalIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalIsOpen(false), []);
  const passwords = {
    kwakwa:
      "Un plat qui te fait plaisir. Ce que tu veux, j'essaie de te le faire ! 👨‍🍳",
    fesses:
      "Un origami ! 🙌 Tu récupereras ta récompense la prochaine fois que l'on se verra! 🤓",
    "c'est ca qu'vous voulaient ?":
      "Tu es désormais une gigantesque geek. Tu gagnes le droit de me taper dessus sur It Takes Two! 🎮",
    jtd: "Mouais... bravo... moi aussi jtd coquchine va. et c'est tout c'que t'auras aujourd'hui.",
    jar: "Bien joué, t'y mettras 5 balles pour avoir louffé l'autre fois d'ailleurs. Louffeuse.",
    flute: "Excellente réponse, flûteuse de rideau que tu es. JTD.",
    "#keffieh2010":
      "Bravo, pour ce que ça vaut moi je l'aime bien cette écharpe. Je la porterais quand on ira à Pornic ! 🌊",
    "grand corps malade bernard":
      "Bravo, c'était la bonne réponse. J'ai trop hâte qu'on fasse la pochette d'album. Notre premier morceau s'appellera : 'La Frite' .",
    curry:
      "Bien ouej' ma gueule, je suis hyper djeunss. Tu m'as appris à faire UN PLAT, tu vas en bouffer ma vieille.",
    couloir:
      "Eh oui, on parle bien de l'endroit où l'on trouve les turbo cwottes de yudö. Pour ta peine, tu gagnes un verre de vin au petit bar un peu bobo auquel on est allé une fois, peut être deux fois même je sais pas si on y sera retourné entre le moment où j'écris ça et le moment où tu vas le lire. J'aime autant te dire que c'est pas simple et j'avoue qu'en ce moment je me sens un peu délaissé par mes chats qui n'ont d'yeux que pour toi, serait-ce de la jalousie ? on ne le saura probablement jamais. Je n'arrive pas à m'arréter d'écrire, je t'ai déjà dit que tu étais magnifique ? Faudra que tu me le rappelles à l'occasion. bisous",
    gcd: "Bien joué! ça commence à se corser. Je vais essayer de rendre ce jeu un peu plus difficile... En attendant je suis ravi que tu aies trouvé la réponse. J'ai hâte de te voir, on est Jeudi aujourd'hui, on se voit demain ?",
    roumaine:
      "Braaaaaavoooo, bon ok c'était pas super difficile, j'essaierai de faire mieux demain. Je me disais que j'aimerais bien qu'on refasse le truc des dessins, c'était cool. ça et un strip-Uno.",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target[0].value;

    if (passwords[password.toLowerCase()]) {
      let state = updateProgression(password);
      if (state === "old") return;
      setCustomModalTitle("Bravo ! 🎉 Tu as gagné :");
      setCustomModalContent(passwords[password]);
      setModalIsOpen(true);
    } else {
      alert("Mauvais mot de passe! nullos!");
    }
    event.target.reset();
  };

  const updateProgression = useCallback(
    (password) => {
      console.log(password);

      if (!progression.includes(password.toLowerCase())) {
        const updatedProgression = [...progression, password];
        setProgression(updatedProgression);
        localStorage.setItem("progression", JSON.stringify(updatedProgression));
        openCustomModal(passwords[password]);
        return "new";
      } else {
        alert("Tu as déjà trouvé ce code secret!");
        return "old";
      }
    },
    [progression]
  );

  const renderDayButton = (day) => {
    const isCurrentOrPastDate =
      new Date(currentDate.split("/").reverse().join("-")) >=
      new Date(day.date.split("/").reverse().join("-"));
    return (
      <div
        key={day.day}
        onClick={isCurrentOrPastDate ? () => openModal(day) : null}
        className={`day ${
          isCurrentOrPastDate
            ? "bg-green-600 cursor-pointer"
            : "bg-green-300 cursor-not-allowed"
        } text-white rounded-lg shadow-lg p-6 text-2xl font-bold text-center transition-transform transform ${
          isCurrentOrPastDate ? "hover:bg-green-500 hover:scale-105" : ""
        }`}
      >
        {day.day}
      </div>
    );
  };

  const renderDayLink = (day) => (
    <Link
      key={day.day}
      to={`/day/${day.day}`}
      className="day bg-green-600 text-white rounded-lg shadow-lg p-6 text-2xl font-bold text-center hover:bg-green-500 transition-transform transform hover:scale-105"
    >
      {day.day}
    </Link>
  );

  return (
    <div className="App min-h-screen bg-white text-green-900 font-sans flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-red-700 mt-4">
        ♥ ☀ Sublime Coline ☀ ♥
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
        <input
          type="text"
          placeholder="Code secret..."
          className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition-transform transform hover:scale-105"
        >
          Ok!
        </button>
      </form>

      <div className="w-full max-w-xs bg-white border rounded-full h-4 mt-4 relative">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{
            width: `${(progression.length / 24) * 100}%`,
          }}
        ></div>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-green-900">
          {progression.length}/24
        </span>
      </div>

      <div className="calendar grid grid-cols-4 gap-4 max-w-lg mx-auto mt-8">
        {days.map((day) =>
          displayMode === "modal" ? renderDayButton(day) : renderDayLink(day)
        )}
      </div>

      <button
        onClick={() =>
          openCustomModal(
            <div>
              <p className="text-xl">{`Tu as trouvé ${progression.length}/24 codes secrets!`}</p>
              <ol className="mt-4 list-decimal p-10">
                {progression.slice(0, progression.length).map((code, index) => (
                  <li key={index}>{passwords[code]}</li>
                ))}
              </ol>
            </div>
          )
        }
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-500 transition-transform transform hover:scale-105"
      >
        Voir les jours trouvés
      </button>

      {displayMode === "modal" && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "transparent",
              border: "none",
              width: "90%", // Largeur adaptative
              maxWidth: "500px", // Largeur maximale pour éviter trop grand
              maxHeight: "80vh", // Gérer les petits écrans
              overflowY: "auto", // Activer le scrolling si le contenu dépasse
            },
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          }}
        >
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            {customModalContent ? (
              <div>
                <p className="text-2xl mb-2">{customModalTitle} </p>
                {customModalContent}
                <p className="mt-4">
                  <i>A demain beauté fatale!</i>
                </p>
              </div>
            ) : (
              <DayContent day={currentDay} />
            )}
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Fermer
            </button>
          </div>
        </Modal>
      )}

      {/* <Routes>
        {days.map((day) => (
          <Route
            key={day.day}
            path={`/day/${day.day}`}
            element={<DayContent day={day.day} />}
          />
        ))}
      </Routes> */}
    </div>
  );
};

export default App;
