import { useTodos } from '../Providers/TodosProvider/TodosProvider';
import styles from './TodoList.module.css'
const TodoList = (props) => {
    const todos = useTodos();
    return ( 
        <div>
            {
                todos.map((todo) => {
                    return(
                        <div key={todo.id}>
                            <span>{todo.content}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default TodoList;