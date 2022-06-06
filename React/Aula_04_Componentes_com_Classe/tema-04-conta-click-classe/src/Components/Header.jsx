import { Component } from 'react';
import PropTypes from 'prop-types';

const estilo = {
    color: 'blue',
    border: 'black solid 2px',
    borderRadius: '20px',
    padding:'8px',
    backgroundColor: '#E6E6E6',
};

export class Header extends Component {
    render() {
        return (
            <div>
                <h1 style={estilo}>Olá, {this.props.nome}, Seja bem-vindo!</h1>
            </div>
        );
    }
}

Header.defaultProps = {
    nome: 'Nome padrão',
};

Header.propTypes = {
    nome: PropTypes.string,
};

export default Header;
