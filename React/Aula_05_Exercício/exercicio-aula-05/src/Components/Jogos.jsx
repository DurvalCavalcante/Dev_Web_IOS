import { FaTimes } from 'react-icons/fa';

const Jogos = ({ games, onDelete, onToggle }) => {
    return (
        <div
            className={`games ${games.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(games.id)}
        >
            <h3>
                {games.jogo}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(games.id)}
                />
            </h3>
            <p>{games.plataforma}</p>
            <p>{games.ano}</p>
        </div>
    );
};

export default Jogos;