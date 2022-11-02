import React from 'react';

//provides the user with the ability to type in input
//Provides a drop down box to indicate "Completed" or "Uncompleted"
function Form({setInputText, todos, setTodos, inputText, setStatus}){
    //Javascript code and function
    //everytime the input changes, the function is being ran 
    function inputTextHandler(e) {
        setInputText(e.target.value); //pass in information 
       };
      //prevents the page from refreshing from input 
      function submitTodoHandler(e) {
        e.preventDefault()
        setTodos([
          ...todos, 
          {text: inputText, completed: false, id: Math.random() * 1000},
        ]);
        setInputText("");
         };
          //Events for "Completed" or "Uncompleted" in drop down list 
          function statusHandler(e) {
            setStatus(e.target.value);
          };
          return(
            <form>
              <input
                value = {inputText}
                onChange = {inputTextHandler}
                type = "text"
                className="todo-input"
              />
              <button onClick = {submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
              </button>
              <div className="select">
                <select onChange = {statusHandler} name="todos" className="filter-todo">
                  <option value="all">All</option>
                  <option value="completed">Completed</option>
                  <option value="uncompleted">Uncompleted</option>
                </select>
              </div>
            </form>
            );
};

export default Form; //give the same name as the function name 
