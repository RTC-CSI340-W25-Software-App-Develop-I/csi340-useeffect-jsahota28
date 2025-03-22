import React from "react";

function Cards({ characters, onCharacterClick }) {
  return (
    <div className="cards-container">
      {characters.map((char, index) => (
        <div key={index} className="card" onClick={() => onCharacterClick(char.url)}>
          <h3>{char.name}</h3>
          <p>Height: {char.height} cm</p>
          <p>Mass: {char.mass} kg</p>
          <p>Birth Year: {char.birth_year}</p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
