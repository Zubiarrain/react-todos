import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({children}){
    

  /*********************** ESTADOS *********************/

  /* El estado es inmutable. Si queremos que cambie necesitamos una funcion de mutabilidad */
  const {
    item: todos, /* Renombro */
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState(''); /* uso un string vacío como como valor inicial */
  const [openModal, setOpenModal] = React.useState(false);

  /*********************** ESTADOS DERIVADOS *********************/

  /* Estados derivados. A partir de un estado se obtiene un valor */
  const completedTodos = todos.filter(todo => todo.completed ).length;
  const totalTodos = todos.length;
  //const searchedTodo = todos.filter(todo => todo.text === searchValue && todo)
  const searchedTodo = todos.filter(
    (todo) => {return todo.text.toLowerCase().includes(searchValue.toLowerCase())});

  

  /*********************** FUNCIONES *********************/
  
  const changeTodoState = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    let state = newTodos[todoIndex].completed;
    state ? state = false : state = true;
    newTodos[todoIndex].completed = state;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    let newID;
    if (newTodos.length > 0){
      newID = newTodos[newTodos.length -1].id
    } else{
      newID = 1
    } 
    newTodos.push({
      id: newID,
      text: text,
      completed: false
    });
    saveTodos(newTodos);
  }

  /*********************** RETURN *********************/
    
  return (
      <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          todos,
          searchValue,
          setSearchValue,
          searchedTodo,
          changeTodoState,
          deleteTodo,
          openModal,
          setOpenModal,
          addTodo
      }} >
          {children}
      </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider}