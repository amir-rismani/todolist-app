import { useTodosActions } from '../Providers/TodosProvider/TodosProvider';
import { VscCheck, VscTrash, VscEdit, VscChromeClose } from "react-icons/vsc";
import styles from './Todo.module.css'
import { useState } from 'react';
const Todo = ({todo}) => {
    // const todos = props.todos;
    const dispatch = useTodosActions();

    const completeHandler = (todoId) => {
        dispatch({type: 'complete', todoId})
    }

    const editHandler = (todoId) => {
        dispatch({type: 'edit', todoId})
    }

    const deleteHandler = (todoId) => {
        dispatch({type: 'delete', todoId})
    }

    const renderTodos = () => {
        return(
            <div key={todo.id} className={styles.todo}>
                <label className={todo.isCompleted && styles.completed}>
                    <input type="checkbox" name='todos' checked={todo.isCompleted}/>
                    {todo.content}
                </label>
                <div className={styles.actions}>
                    <span className={styles.date}>Created at: {new Date(todo.createdAt).toLocaleDateString('en')}</span>
                    <span className={styles.action} title='Done' onClick={() => completeHandler(todo.id)}>
                        {!todo.isCompleted ? <VscCheck/> : <VscChromeClose/>}
                    </span>
                    <span className={styles.action} title='Edit' onClick={() => editHandler(todo.id)}><VscEdit/></span>
                    <span className={`${styles.action} ${styles.delete}`} title='Delete' onClick={() => deleteHandler(todo.id)}><VscTrash/></span>
                </div>
            </div>
        )
    }

    return <div className={styles.todos}>{renderTodos()}</div>
}
 
export default Todo;