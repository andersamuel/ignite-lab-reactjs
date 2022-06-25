import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../assets/images/logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();

    createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  };

  return (
    <div className="home">
      <div className="div1">
        <div className="div2">
          <Logo />

          <h1>
            Construa uma <strong>aplicação completa</strong>, do zero, com{" "}
            <strong>React JS</strong>
          </h1>
          <p>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="div3">
          <strong>Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe}>
            <input
              type="text"
              placeholder="Seu nome completo"
              autoComplete="new-password"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Seu email aqui"
              autoComplete="new-password"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={loading}>
              Garantir minha entrada
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/images/code.png" alt="" />
    </div>
  );
};

export default Home;
