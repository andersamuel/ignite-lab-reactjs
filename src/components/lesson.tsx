import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = (props: Props) => {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailabre = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveLesson = slug === props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="lesson group">
      <span className="release-date">{availableDateFormatted}</span>
      <div
        className={classNames("lesson-container", {
          "bg-green-500": isActiveLesson,
        })}
      >
        <header className="lesson-header">
          {isLessonAvailabre ? (
            <span
              className={classNames("lesson-status-released", {
                "text-white": isActiveLesson,
                "text-blue-400": !isActiveLesson,
              })}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="lesson-status-coming-soon">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className={classNames("lesson-type", {
              "border-white": isActiveLesson,
              "border-green-400": !isActiveLesson,
            })}
          >
            {props.type === "live" ? "ao vivo" : "aula prática"}
          </span>
        </header>
        <strong
          className={classNames("lesson-name", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
};

export default Lesson;
