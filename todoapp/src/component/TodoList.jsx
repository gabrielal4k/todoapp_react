import TodoItem from "./TodoItem";
import styles from "../component/todolist.module.css";

export default function TodoList({todos, setTodos}) {

    const sortedTodos = todos
    .slice()
    .sort((a,b) => Number(a.done) - Number(b.done) );

    return (   
        <div className={styles.modernList}>
            {sortedTodos.map(item => (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />
            ))} 
        </div>
    );
}