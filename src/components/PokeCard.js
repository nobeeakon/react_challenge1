import React from "react";

const PokeCard = ({ name, sprites, video }) => (
  <div>
    <h1> {name} </h1>
    <img src={sprites.front_default} alt="default" />
    <img src={sprites.front_shiny} alt="shiny" />
    <a href={video} target="_blank" rel="noreferrer">
      {" "}
      video{" "}
    </a>
  </div>
);
export default PokeCard;
