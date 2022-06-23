import { Route, Routes } from "react-router-dom";

import Event from "./pages/event";

const Router = () => {
  return (
    <Routes>
      <Route index element={<h1>ss</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};

export default Router;
