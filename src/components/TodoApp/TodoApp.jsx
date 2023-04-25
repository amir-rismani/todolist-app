import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.css'
const TodoApp = () => {
    return (
        <div className={styles.container}>
            <h1>Todo App Component</h1>
            <TodoForm/>
            <TodoList/>
        </div>
    );
}
 
export default TodoApp;