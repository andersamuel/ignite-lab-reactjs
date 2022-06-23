import {
  CaretRight,
  CircleNotch,
  DiscordLogo,
  FileArrowDown,
  Lightning,
} from "phosphor-react";
import { Player, Youtube, DefaultUi } from "@vime/react";

import "@vime/core/themes/default.css";
import { gql, useQuery } from "@apollo/client";

interface Props {
  lessonSlug: string;
}

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`;
interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      avatarURL: string;
      bio: string;
      name: string;
    };
  };
}

const Video = (props: Props) => {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className="flex-1 items-center justify-center flex">
        <CircleNotch size={32} weight="duotone" className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="video">
      <div className="player">
        <div className="video-player">
          <Player>
            <Youtube videoId={data.lesson.videoId} key={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="lesson-info">
        <div className="title-description">
          <div className="description">
            <h1>{data.lesson.title}</h1>
            <p>{data.lesson.description}</p>
            <div className="teacher">
              <img
                src={data.lesson.teacher.avatarURL}
                alt={data.lesson.teacher.name}
              />
              <div className="about-teacher">
                <strong>{data.lesson.teacher.name}</strong>
                <span>{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="/" className="discord">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a href="/" className="challenge">
              <Lightning size={24} />
              Comunidade no discord
            </a>
          </div>
        </div>
        <div className="additional">
          <a href="/">
            <div className="icon">
              <FileArrowDown size={40} />
            </div>
            <div className="content">
              <strong className="title">Material complementar</strong>
              <p className="description">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="arrow">
              <CaretRight size={24} />
            </div>
          </a>
          <a href="/">
            <div className="icon">
              <FileArrowDown size={40} />
            </div>
            <div className="content">
              <strong className="title">Wallpappers exclusivos</strong>
              <p className="description">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="arrow">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Video;
