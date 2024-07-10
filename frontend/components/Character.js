import React, { useState } from 'react';

const Character = ({ character }) => {
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  };
 console.log(character)
  return (
    <div className="character-card" onClick={togglePlanet}>
      <h2>{character.name}</h2>
      
     
      {showPlanet && <p>Planet: <span>{character.homeworld}</span></p>}
    </div>
  );
};

export default Character;
