import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './Character';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get('http://localhost:9009/api/people'),
          axios.get('http://localhost:9009/api/planets'),
        ]);

        const people = peopleResponse.data;
        const planets = planetsResponse.data;

        const combinedData = people.map(person => {
          const homeworld = planets.find(planet => planet.id === person.homeworld);
          return {
            ...person,
            homeworld: homeworld ? homeworld.name : 'Unknown',
          };
        });

        setCharacters(combinedData);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading Characters...</div>;
  }

  return (
    <div>
      {characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default App;
