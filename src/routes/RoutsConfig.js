import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Games from '../pages/Games'
// import AddGame from '../pages/AddGame'
// import GameDetails from '../pages/GameDetails'
// import NotFound from '../pages/NotFound'
// import Counter from '../pages/Counter'
// import Settings from '../pages/Settings'

const Games = React.lazy(() => import("../pages/Games"));
const AddGame = React.lazy(() => import("../pages/AddGame"));
const GameDetails = React.lazy(() => import("../pages/GameDetails"));
const NotFound = React.lazy(() => import("../pages/NotFound"));
const Counter = React.lazy(() => import("../pages/Counter"));
const Settings = React.lazy(() => import("../pages/Settings"));

export default function RoutesConfig() {
  return (
    <Suspense fallback={<h2>Please wait Loading component...</h2>}>
      <Routes>
        <Route path="" element={<Games />} />
        <Route path="add-game" element={<AddGame />} />
        <Route path="game-details/:id" element={<GameDetails />} />
        <Route path="settings" element={<Settings />} />
        <Route path="counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
