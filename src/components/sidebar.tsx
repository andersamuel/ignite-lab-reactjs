import { gql, useQuery } from "@apollo/client";
import React from "react";
import Lesson from "./lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonsQuery {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: "live" | "class";
  }[];
}

const Sidebar: React.FC = () => {
  const { data } = useQuery<GetLessonsQuery>(GET_LESSONS_QUERY);

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
