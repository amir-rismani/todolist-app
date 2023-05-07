import { useState, useEffect } from "react";
import Select from 'react-select';
import { useTodos, useTodosActions } from "../Providers/TodosProvider/TodosProvider";
import styles  from "./TodoNavbar.module.css";

const options = [
  { value: '', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'uncompleted', label: 'Uncompleted' },
];

const TodoNavbar = () => {
    const todos = useTodos();
    const dispatch = useTodosActions();
    const [uncompletedCount, setUncompletedCount] = useState(0);
    const [filter, setFilter] = useState({ value: '', label: 'All' });

    useEffect(()=>{
        setUncompletedCount(()=> todos.filter(todo=>!todo.isCompleted).length);
    }, [todos]);

    const filterHandler = (selectedOption) => {
        console.log(selectedOption)
        dispatch({type: 'filter', selectedOption});
        setFilter(selectedOption);
    }

    return (
        <header className={styles.navbar}>
            <div className={styles.messageContainer}>
                { 
                uncompletedCount 
                ? <><span className={styles.badge}>{uncompletedCount}</span><span className={styles.message}>tasks aren't completed.</span> </>
                : <span className={`${styles.message} ${styles.success}`}>Not exist uncompleted tasks today.</span> 
                }
            </div>
            <div className={styles.filter}>
                <span>Filter by: </span>
                <Select
                    value={filter}
                    onChange={filterHandler}
                    options={options}
                    className={styles.select}
                />
            </div>
        </header>
    );
}

export default TodoNavbar;