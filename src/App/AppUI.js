import React from "react";
import {TodoCounter} from '../TodoCounter';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
/* import {TodoSearch} from '../TodoSearch'; */
import {TodoSearchComboBox} from '../TodoSearchComboBox';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
//import {ResponsiveAppBar} from '../ResponsiveAppBar';
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import {TodoForm} from "../TodoForm"


function AppUI(){
  
  const {
    loading,
    error,
    searchedTodo,
    changeTodoState,
    deleteTodo,
    openModal
  } = React.useContext(TodoContext)

  return (
      // sintaxis JSX
      <React.Fragment> {/* Elementos de react: "div", "header", etc */}
        {/* <ResponsiveAppBar/> */}
        <TodoCounter />
        <TodoSearchComboBox/>
        <TodoList>
          {loading && (
            <>
              <TodosLoading/>
              <TodosLoading/>
              <TodosLoading/>
            </>
            )}
          {error && <TodosError/>}
          {(!loading && searchedTodo.length === 0) && <EmptyTodos/>}

          {searchedTodo.map(todo => (
              <TodoItem 
                key={todo.id} 
                text={todo.text}
                completed={todo.completed}
                /* onComplete={() => completeTodo(todo.id)} */
                onChangeTodoState={() => changeTodoState(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
              />
          ))}
        </TodoList>
  
        <CreateTodoButton />

        {
          openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )
        }
  
      </React.Fragment>
    );
}

export {AppUI}