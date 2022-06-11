import OpenItem from "./TasksOpenItem";

const TasksOpen = ({ games, onDelete}) => {
    return (
        <>
            {games.map((games) => (
                <OpenItem
                    key={games.id}
                    games={games}
                    onDelete={onDelete}
                />
            ))}
        </>
    );
};

export default TasksOpen;