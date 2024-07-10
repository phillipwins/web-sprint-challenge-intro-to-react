import React, { useState } from 'react';

const Character = ({ character }) => {
  const [showPlanet, setShowPlanet] = useState(false);

  const togglePlanet = () => {
    setShowPlanet(!showPlanet);
  };
 console.log(character)
  return (
    <div className="character-card" onClick={togglePlanet}>
      <h3 className="character-name">{character.name}</h3>
      
     
      {showPlanet && <p>Planet: <span className="character-planet">{character.homeworld}</span></p>}
    </div>
  );
};

export default Character;
