import { useState } from 'react';
import { useTodosActions } from '../Providers/TodosProvider/TodosProvider';
import { VscAdd, VscEdit } from "react-icons/vsc";
import styles from './TodoForm.module.css'

// By Rasing Event
// const TodoForm = ({onAddTodo}) => {
// By send state and setState method
// const TodoForm = ({todos, setTodos}) => {
// By Context + Reducer
const TodoForm = ({submitType="add", inputValue="", todoId}) => {
    const dispatch = useTodosActions();
    const [todo, setTodo] = useState(inputValue);

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
        if(submitType==='edit') dispatch({type: submitType, todo, todoId});
        else{
            dispatch({type: submitType, todo});
            setTodo("");
        }
    }

    return ( 
        <div className={`${styles.formContainer} ${submitType}`}>
            <form onSubmit={submitHandler}>
                <input type='text' value={todo} onChange={changeTodoHandler}/>
                <button type='submit'>{submitType === 'add' ? <VscAdd/> : <VscEdit/> }</button>
            </form>
        </div>
    );
}
 
export default TodoForm;