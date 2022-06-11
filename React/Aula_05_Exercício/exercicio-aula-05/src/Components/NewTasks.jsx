import ProtoTypes from 'prop-types';
import PropTypes from 'prop-types';

const NewTasks = ({ title }) => {
    return (
        <header className="header">
            <h1>Lista de {title}</h1>
            <Buttom bgColor="green" text="Adicionar" />
        </header>
    );
};

const Buttom = ({ bgColor, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: bgColor }}
            className="btn"
        >
            {text}
        </button>
    );
};

Buttom.defaultProps = {
    bgColor: 'steelblue',
};

Buttom.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    onClick: PropTypes.func,
};

NewTasks.defaultProps = {
    title: 'jogos',
};

NewTasks.protoType = {
    title: ProtoTypes.string.isRequired,
};

export default NewTasks;