import { Route, Routes } from "react-router-dom";

import Event from "./pages/event";
import Home from "./pages/home";

const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};

export default Router;
