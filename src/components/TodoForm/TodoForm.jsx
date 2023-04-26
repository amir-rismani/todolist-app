import { useState } from 'react';
// import styles from './TodoForm.module.css'
import { useTodosActions } from '../Providers/TodosProvider/TodosProvider';
// By Rasing Event
// const TodoForm = ({onAddTodo}) => {
// By send state and setState method
// const TodoForm = ({todos, setTodos}) => {
// By Context + Reducer
const TodoForm = () => {
    const dispatch = useTodosActions();

    const [todo, setTodo] = useState('');

    const changeTodoHandler = (event) => {
        setTodo(event.target.value);
    }

    // const addTodo = () => {
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

    const submitHandler = (event) => {
        event.preventDefault();
        // By Rasing Event
        // onAddTodo(todo)

        // By send state and setState method
        // addTodo();

        // By Context + Reducer
        dispatch({type: 'add', todo});

        setTodo("");
    }

    return ( 
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={todo} onChange={changeTodoHandler}/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}
 
export default TodoForm;