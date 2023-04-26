import { useTodos } from '../Providers/TodosProvider/TodosProvider';
import styles from './TodoList.module.css'
import Todo from '../Todo/Todo';

const TodoList = () => {
    // const todos = props.todos;
    const todos = useTodos();

    const renderTodos = () => {
        if (!todos.length) return <span>Todos not exist...</span>
        return todos.map((todo) => <Todo todo={todo}/>)
    }
    
    return <div className={styles.todos}>{renderTodos()}</div>
}

export default TodoList;