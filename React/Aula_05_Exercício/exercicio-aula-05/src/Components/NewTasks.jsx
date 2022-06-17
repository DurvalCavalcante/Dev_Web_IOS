import PropTypes from 'prop-types';
import Button from './Button';
import Modal from 'react-modal';
import { useState } from 'react';

const NewTasks = ({ title }) => {
    Modal.setAppElement('#root');

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <header className="header">
            <h1>Agenda de {title}</h1>
            <Button text="Adicionar" bgColor="#4cac1c" onClick={openModal} />
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
                <section className="containe">
                    <div>
                        <form className='form-control'>
                            <label>Tarefa</label>
                            <input type="text" placeholder="Nova Tafera" />
                        </form>
                    </div>

                    <div>
                        <form className='form-control'>
                            <label>Descrição</label>
                            <textarea
                                placeholder="Descrição da Tarefa"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </form>
                    </div>

                    <div>
                        <form className='form-control'>
                            <label>Data</label>
                            <input type="date" />
                        </form>
                    </div>

                    <div>
                        <form className='form-control'>
                            <label>Hora</label>
                            <input type="time" />
                        </form>
                    </div>

                    <button onClick={closeModal} type="button" className='btn'>
                        Adicionar
                    </button>
                </section>
            </Modal>
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
