import { useState, useEffect } from "react";
import { useTodos } from "../Providers/TodosProvider/TodosProvider";
import styles  from "./TodoNavbar.module.css";

const TodoNavbar = () => {
    const todos = useTodos()
    const [uncompletedCount, setUncompletedCount] = useState(0);

    useEffect(()=>{
        setUncompletedCount(()=> todos.filter(todo=>!todo.isCompleted).length);
    }, [todos]);

    return (
        <header className={styles.navbar}>
                { uncompletedCount ? <><span className={styles.badge}>{uncompletedCount}</span><span className={styles.message}>tasks aren't completed.</span></> : <span className={`${styles.message} ${styles.success}`}>Not exist uncomplete tasks today.</span> }
        </header>
    );
}

export default TodoNavbar;