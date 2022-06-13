import PropTypes from 'prop-types';
import Button from './Button';

const NewTasks = ({ title }) => {
    const onClick = () => {
        let valorTarefa = prompt('- Adicione uma nova tarefa');
        let valorData = prompt('- Adicone o dia e o horário');

        if (valorTarefa === '') {
            alert('- Adicione a sua tarefa');
        }
        else if (valorData === ''){
            alert('- Adicione a data de sua tarefa');
        }
    };

    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
            <Button text="Adicionar" bgColor="#4cac1c" onClick={onClick} />
        </header>
    );
};

NewTasks.defaultProps = {
    title: 'Tarefas',
};

NewTasks.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NewTasks;
