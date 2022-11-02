import React from "react";

//gives the program the ability to click on the complete or trash button
function Todo({todo, text, todos, setTodos}) {
    //Events to handle deleting
    //function that is called when the user clicks on the trash button
    function deleteHandler () {
        return(
            setTodos(todos.filter((el) => el.id !== todo.id))
        );
    }
    //Events to handle completion
    //function that is called when the user clicks on the check mark box for completion
    function completeHandler(){
        return(
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
        );
    }
    return(
        <div className = "todo">
            <li className = {`todo-item ${todo.completed ? "completed" : ""}`}>{text} </li> 
            <button onClick = {completeHandler} className = "complete-btn">
                <i className = "fas fa-check"></i>
            </button>
            <button onClick = {deleteHandler} className = "trash-btn">
            <i className = "fas fa-trash"></i>
            </button>
        </div> 

    );
}

export default Todo; 