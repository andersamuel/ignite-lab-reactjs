import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header";
import Sidebar from "../components/sidebar";
import Video from "../components/video";

const Event: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="event">
      <Header />
      <main className="main">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};

export default Event;
