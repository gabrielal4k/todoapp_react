import TodoItem from "./TodoItem";
import styles from "../component/todolist.module.css";

export default function TodoList({todos, setTodos}) {


    return (   
        <div className={styles.modernList}>
            {todos.map(item => (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))} 
        </div>
    );
}