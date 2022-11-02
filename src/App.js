import React, {useState, useEffect} from 'react';
import './App.css';

//importing components from Form.js
import Form from './components/Form';
import TodoList from './components/ToDoList';

//import all the components onto the todo list
//includes the set up for the header, and the components to add the user input onto the list
//like the main
function App() {
  //For the states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
    //use effect
    
    useEffect (() => {
    //filtering out the status of each event
    //marking if the event is complete, uncompleted, or unmarked (all)
    function filterHandler(){
      switch(status){
        case 'completed': //marking as completed 
            setFilteredTodos(todos.filter(todo => todo.completed === true)) //setting completed to true
            break;
        case 'uncompleted': //marking as uncompleted
            setFilteredTodos(todos.filter(todo => todo.completed === false)) //setting completed to false
            break;
          default:
            setFilteredTodos(todos);
            break;
      }
    };  
      //save to local storage
      //gets all the data from user to put into local storage
    function saveLocalTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
      filterHandler();
      saveLocalTodos();
    }, [todos, status]); 
    //get the local stoarge
    //get the todos and put them in local stoarge
    //to run once 
    /*useEffect(() =>{
        function getLocalTodos(){
          if(localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]));
          }
          else {
            let todoLocal = localStorage.getItem('todos', JSON.stringify(todos));
            setTodos(todoLocal);
          }
        }
        getLocalTodos();
      }, []);
      */
  //functions 
  return (
    <div className="App">
      <header>
      <h1>Jadyn's To-Do List </h1>
      </header>
      <Form
        inputText = {inputText} 
        todos= {todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText} 
        setStatus = {setStatus}
      />
      <TodoList 
        filteredTodos = {filteredTodos}
        setTodos = {setTodos}
        todos = {todos}
      />
    </div>
  );
}

export default App;
