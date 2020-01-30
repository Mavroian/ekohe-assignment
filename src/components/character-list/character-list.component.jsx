import React from "react";
import Character from "../character/character.component";
import "./character-list.styles.css";

const CharacterList = ({ characters }) =>
  characters.length !== 0 ? (
    <div className="character-list">
      {characters.map((character, i) => (
        <Character key={i} index={i} character={character} />
      ))}
    </div>
  ) : (
    <h1>Not Found!</h1>
  );

export default CharacterList;
