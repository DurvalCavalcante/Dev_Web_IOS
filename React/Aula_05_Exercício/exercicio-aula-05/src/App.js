import NewTasks from "./Components/NewTasks";
import TaksOpen from "./Components/TasksOpen";
import { useState } from 'react';

function App() {
  const [games, setGames] = useState([
    {
      id: 1,
      jogo: 'Donkey Kong Country',
      plataforma: 'Super Nitendo',
      ano: '21 de novembro de 1994',
      reminder: false,
    },

    {
      id: 2,
      jogo: 'Super Mario World',
      plataforma: 'Super Nitendo',
      ano: '21 de novembro de 1990',
      reminder: false,
    },

    {
      id: 3,
      jogo: 'The King Of The Fighter 2002',
      plataforma: 'Arcade',
      ano: '10 de outubro de 2002',
      reminder: false,
    },

    {
      id: 4,
      jogo: 'God Of War II',
      plataforma: 'PlayStation 2',
      ano: '13 de março de 2007',
      reminder: false,
    },

    {
      id: 5,
      jogo: 'League Of Legends',
      plataforma: 'Microsoft Windows',
      ano: '27 de outubro de 2009',
      reminder: false,
    },

    {
      id: 6,
      jogo: 'Valorant',
      plataforma: 'Microsoft Windows',
      ano: '2 de junho de 2020',
      reminder: false,
    }
  ]);

  // Deletar tarefa
  const deletaTarefa = (id) => {
    setGames(games.filter((task) => task.id !== id));
  };

  // Alterar o reminder 
  const mudarReminder = (id) => {
    setGames(
      games.map((games) =>
        games.id === id ? { ...games, reminder: !games.reminder } : games
      )
    );
    console.log(id);
  };

  return (
    <div className="container">
      <NewTasks title="Jogos" />
      {games.length > 0 ? (
        <TaksOpen
          games={games}
          onDelete={deletaTarefa}
          onToggle={mudarReminder}
        />
      ) : (
        'Você já jogou todos os jogos do mês.'
      )}

      <br />
    </div>
  )
};

export default App;