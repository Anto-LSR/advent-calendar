import React, { Suspense } from "react";

// Fonction de mappage pour importer dynamiquement les composants
const getDayComponent = (day) => {
  if (!day || !day.day) {
    return () => <div>Contenu non disponible pour ce jour.</div>;
  }
  console.log(day);

  switch (day.day) {
    case 1:
      return React.lazy(() => import("./Days/Day1"));
    case 2:
      return React.lazy(() => import("./Days/Day2"));
    case 3:
      return React.lazy(() => import("./Days/Day3"));
    case 4:
      return React.lazy(() => import("./Days/Day4"));
    case 5:
      return React.lazy(() => import("./Days/Day5"));
    case 6:
      return React.lazy(() => import("./Days/Day6"));
    case 7:
      return React.lazy(() => import("./Days/Day7"));
    case 8:
      return React.lazy(() => import("./Days/Day8"));
    case 9:
      return React.lazy(() => import("./Days/Day9"));
    case 10:
      return React.lazy(() => import("./Days/Day10"));
    case 11:
      return React.lazy(() => import("./Days/Day11"));
    case 12:
      return React.lazy(() => import("./Days/Day12"));

    // Ajoutez des cas pour les autres jours
    default:
      return () => <div>Contenu non disponible pour ce jour.</div>;
  }
};

function DayContent({ day }) {
  const DayComponent = getDayComponent(day);

  return (
    <div>
      <Suspense fallback={<div>Chargement...</div>}>
        <DayComponent />
      </Suspense>
    </div>
  );
}

export default DayContent;
