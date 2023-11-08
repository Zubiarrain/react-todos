import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';
/* const estilos = {
    fontSize : '24px',
    textAlign: 'center',
    margin: 0,
    padding: '48px'
} */


function TodoCounter() {
    const {
        completedTodos,
        totalTodos
    } = React.useContext(TodoContext)
    
    return (
        totalTodos !== completedTodos 
        ?
        <h1 className='TodoCounter'/* style={estilos} */>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
        </h1>
        :
        <h1 className='TodoCounter'/* style={estilos} */>
        No tienes Todos pendientes
        </h1>

    );
}

export { TodoCounter }