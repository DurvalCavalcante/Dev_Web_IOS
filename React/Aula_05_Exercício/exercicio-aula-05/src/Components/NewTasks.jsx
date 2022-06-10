import PropTypes from 'prop-types';
import Button from './Button';

const NewTasks = ({ title }) => {
    const onClick = () => {
     let avaliacao = Number(prompt('- Qual nota você da ao nosso site de 0 a 10 ?'));
      if (avaliacao >= 0 && avaliacao <= 10){
          alert('- Obrigado!');
      }
      else if (avaliacao > 10){
          alert('- Adicione um número válido!');
      }
      else if (avaliacao !== Number){
          alert('- Isso não é válido!');
      }
    };
    
    return (
        <header>
            <h1>Lista de {title} do mês</h1>
            <Button bgColor="green" text="Avaliação do Site" onClick={onClick} />
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
