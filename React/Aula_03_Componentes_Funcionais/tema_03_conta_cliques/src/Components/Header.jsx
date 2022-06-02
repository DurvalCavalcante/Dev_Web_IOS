import PropTypes from 'prop-types'; 
// const estilo = { color: 'red' }; * Adicionar no lugar do color com uma única {}.

const Header = (props) => {
    return (
        <div>
            <h1 style={{ color: 'lightblue' }}>Olá, {props.nome}, seja bem-vindo!</h1>
        </div>
    );
};

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header;
