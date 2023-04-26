// import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.css'
const TodoApp = () => {
    // First way: use state and rasing event
    // const [todos, setTodos] = useState([])
    
    // const addTodoHandler =(todo)=>{
    //     const date = new Date();

    //     if(!todo){
    //         alert('Please Enter A Todo...');
    //         return;
    //     }

    //     setTodos([...todos, {
    //             id: date.getTime(),
    //             content:todo,
    //             createdAt: date.toISOString(),
    //             isCompleted: false,
    //     }])
    // }

    return (
        <div className={styles.container}>
            <h1>Todo App Component</h1>
            {/* Rasing Event */}
            {/* <TodoForm onAddTodo={addTodoHandler}/> */}
            {/* Or send state and setState method */}
            {/* <TodoForm setTodos={setTodos} todos={todos}/> */}
            <TodoForm/>
            <TodoList/>
        </div>
    );
}
 
export default TodoApp;