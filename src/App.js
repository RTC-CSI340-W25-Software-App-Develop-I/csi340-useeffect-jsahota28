import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import CardDetail from "./components/CardDetail";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  
  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const fetchCharacters = async (page) => {
    try {
      let res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
      let data = await res.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  
  const fetchCharacterDetails = async (url) => {
    try {
      let res = await fetch(url);
      let data = await res.json();
      setSelectedCharacter(data);
    } catch (error) {
      console.error("Error fetching character details:", error);
    }
  };

  const handleNext = () => setPage((prevPage) => prevPage + 1);
  const handleBack = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      <div className="main-container">
        <Cards characters={characters} onCharacterClick={fetchCharacterDetails} />
        <div>
          <button onClick={handleBack} disabled={page === 1}>
            Back
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
        {selectedCharacter && <CardDetail character={selectedCharacter} />}
      </div>
    </div>
  );
}

export default App;
