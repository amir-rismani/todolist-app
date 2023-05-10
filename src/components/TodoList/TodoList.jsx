import { useFilteredTodos } from '../Providers/TodosProvider/TodosProvider';
import styles from './TodoList.module.css'
import Todo from '../Todo/Todo';
import TodoNavbar from '../TodoNavbar/TodoNavbar';

const TodoList = () => {
    // const todos = props.todos;
    const todos = useFilteredTodos();

    const renderTodos = () => {
        if (!todos.length) return <span>Todos not exist...</span>
        return todos.map((todo) => <Todo todo={todo} key={todo.id} />)
    }

    return (
        <div className={styles.todos}>
            <TodoNavbar />
            {renderTodos()}
        </div>
    )
}

export default TodoList;