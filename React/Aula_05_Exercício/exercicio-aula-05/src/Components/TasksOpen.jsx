import Jogos from "./Jogos";

const TasksOpen = ({games, onDelete, onToggle}) => {
    return (
        <>
        {games.map((games) => (
            <Jogos
            key={games.id}
            games={games}
            onDelete={onDelete}
            onToggle={onToggle}
            />
        ))}
        </>
    )
}

export default TasksOpen;