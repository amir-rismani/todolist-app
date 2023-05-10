import { useState, useEffect } from "react";
import Select from 'react-select';
import { useTodos, useFilteredTodosActions, useFilteredTodos } from "../Providers/TodosProvider/TodosProvider";
import styles from "./TodoNavbar.module.css";

const options = [
    { value: '', label: 'All' },
    { value: 'completed', label: 'Completed' },
    { value: 'uncompleted', label: 'Uncompleted' },
];

const TodoNavbar = () => {
    const todos = useTodos();
    const filteredTodos = useFilteredTodos();
    const filteredDispatch = useFilteredTodosActions();

    const [uncompletedCount, setUncompletedCount] = useState(0);
    const [filter, setFilter] = useState({ value: '', label: 'All' });

    useEffect(() => {
        setUncompletedCount(() => filteredTodos.filter(todo => !todo.isCompleted).length);
    }, [filteredTodos]);

    useEffect(() => {
        filterHandler(filter);
    }, [todos]);

    const filterHandler = (selectedOption) => {
        setFilter(selectedOption);
        filteredDispatch({ type: 'filter', selectedOption, allTodos: todos });
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