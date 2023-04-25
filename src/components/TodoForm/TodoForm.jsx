import { useState } from 'react';
import styles from './TodoForm.module.css'
import { useTodosActions } from '../Providers/TodosProvider/TodosProvider';
const TodoForm = (props) => {
    const dispatch = useTodosActions();

    const [todo, setTodo] = useState('');

    const changeTodoHandler = (event) => {
        setTodo(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
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