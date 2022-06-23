import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

const Lesson = (props: Props) => {
  const isLessonAvailabre = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link to={`/event/lesson/${props.slug}`} className="lesson group">
      <span className="release-date">{availableDateFormatted}</span>
      <div className="lesson-container">
        <header className="lesson-header">
          {isLessonAvailabre ? (
            <span className="lesson-status-released">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="lesson-status-coming-soon">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="lesson-type">
            {props.type === "live" ? "ao vivo" : "aula prática"}
          </span>
        </header>
        <strong className="lesson-name">{props.title}</strong>
      </div>
    </Link>
  );
};

export default Lesson;
