import React from "react";

import "./PokeCard.styles.css";

const PokeCard = ({ name, sprites, video }) => (
  <div className="card">
    <h1 className="pokeName"> {name} </h1>
    <div className="sprite">
      <img src={sprites.front_default} alt="default" />
      <img src={sprites.front_shiny} alt="shiny" />
    </div>
    <a className="pokeVideo" href={video} target="_blank" rel="noreferrer">
      video
    </a>
  </div>
);
export default PokeCard;
