import styles from './App.module.css'
import TodosProvider from './components/Providers/TodosProvider/TodosProvider';
import TodoApp from './components/TodoApp/TodoApp';

const App = () => {
  return (
    <div className={styles.app}>
      <TodosProvider>
        <TodoApp/>
      </TodosProvider>
    </div>
  );
}

export default App;