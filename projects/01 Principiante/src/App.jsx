import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard";

//un componente es una factoria de elementos; un elemento es lo que renderiza React.

export const App = () => {
  const formatUserName = (userName) => `@${userName}`;
  const [name, setName] = useState("midudev");

  console.log("render with name: ", name); // se ejecuta cada vez que cambia el estado.
  // "Cuando el estado de un padre cambia, renderiza todos sus hijos
  // aunque a estos no se les mande props pero no hace cambios en el DOM"

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName={name}
        initialIsFollowing={true}
      >
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="elonmusk"
        initialIsFollowing={false}
      >
        Elon Musk
      </TwitterFollowCard>

      <button onClick={() => setName("Daniel")}>Cambiar Nombre</button>
    </section>
  );
};
