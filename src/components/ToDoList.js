import React from 'react';

//import components 
import Todo from './Todo';

//taken from the vanilla-todo code from developedbyed
//gives the program the ability to add items onto the to do list
function TodoList({todos, setTodos, filteredTodos}) {
    return(
      <div className="todo-container">
        <ul className="todo-list">
          {filteredTodos.map((todo) => (
            <Todo 
              setTodos = {setTodos}
              todos = {todos}
              key={todo.id} 
              todo = {todo}
              text={todo.text} 
              />
          ))}
        </ul>
      </div>
    );
}
export default TodoList;
