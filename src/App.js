import React, { useState, useEffect } from "react";

import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: `Desafio React.js ${Date.now()}`, 
      url: "http://github.com/desafio-react", 
      techs: ["Node.js", "React.js"]
    });
    
    const repository = response.data;

    setRepositories([...repositories, repository]);    
  }

  async function handleRemoveRepository(id) {
    const response = await api.delete(`/repositories/${id}`);
    
    if (response.status === 204) {
      const repositoriesUpdated = repositories.concat();

      const deletedRespositoryIndex = repositoriesUpdated.findIndex(repository => repository.id === id);

      repositoriesUpdated.splice(deletedRespositoryIndex, 1);

      setRepositories(repositoriesUpdated);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => (
          <li key={repository.id}>
            {repository.title}

            <button onClick={() => handleRemoveRepository(repository.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
