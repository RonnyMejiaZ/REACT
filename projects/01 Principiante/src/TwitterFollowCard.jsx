// le pasamos userName, name, isFollowing
import { useState } from 'react'
import './App.css'
export function TwitterFollowCard({ formatUserName ,userName, children, initialIsFollowing }) {

// codigo imperativo: "ser muy especifico en tu codigo" y codigo declarativo: "ser mas abstracto en tu codigo"

// el useState es como apagar o prender la luz de tu habitacion 
// = const [isFollowing"es los dos valores apagado y prendido", setIsFollowing"funcion que cambia el estado"] 
// = useState(false "estado inicial cuando nadie ha entrado a la habitacion es luz apagada")
const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

const handleClick = () => {
    setIsFollowing(!isFollowing)
}
// Una forma de hacerlo
// const imageSrc = `https://unavatar.io/${userName}`
// src={imageSrc}

const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'


  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El avatar de midudev"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
