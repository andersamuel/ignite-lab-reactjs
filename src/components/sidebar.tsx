import React from "react";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./lesson";

const Sidebar: React.FC = () => {
  const { data } = useGetLessonsQuery();

  return (
    <aside className="aside">
      <span className="schedule">Cronograma de aulas</span>
      <div className="lessons">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
