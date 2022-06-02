import PropTypes from 'prop-types';

const BoasVindas = (props) => {
    return (
        <section style={{background: '#0c5149', borderRadius: '20px', padding: '8px', marginBottom: '8px'}}>
            <h1 style={{color: '#e7ddd3'}}>Olá, {props.nome}, seja bem-vindo!</h1>
            <p>Aqui você vai aprender o que é React.</p>
        </section>
    );
};

BoasVindas.defaultProps = {
    nome: 'Nome padrão',
};

BoasVindas.propTypes = {
    nome: PropTypes.string,
};

export default BoasVindas;