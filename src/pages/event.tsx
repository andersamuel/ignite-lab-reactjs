import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Video from "../components/video";

const Event: React.FC = () => {
  return (
    <div className="event">
      <Header />
      <main className="main">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
