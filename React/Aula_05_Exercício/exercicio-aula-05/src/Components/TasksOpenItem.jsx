import { FaTimes } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';

const TasksOpenItem = ({ games, onDelete }) => {
    return (
        <div className="games">
            <h3>
                {games.jogo}
                <span>
                    <FaToggleOff
                        className="icons"
                        style={{ cursor: 'pointer' }}
                    />
                    <FaTimes
                        className="icons"
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => onDelete(games.id)}
                    />
                </span>
            </h3>
            <p>{games.plataforma}</p>
            <p>{games.ano}</p>
        </div>
    );
};

export default TasksOpenItem;
