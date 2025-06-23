import styles from './todoitem.module.css';

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(item){
        console.log(`Deleting item: ${item.name }`);

        todos = todos.filter((todo) => todo !== item);
        setTodos(todos);
    };

    function handleClickItem(name){
        const newTodos = todos.map((todo) => todo.name === name ? {...todo, done: !todo.done} : todo);
        setTodos(newTodos);
        // console.log(newTodos);
    };

    const itemClass = item.done ? styles.completed : "";

    return (
        <div className={styles.modernItem}>
            <div className={styles.modernItemName}>
                <span className={itemClass} onClick={() => handleClickItem(item.name)}>
                    {item.name}
                </span>
                <span>
                    <button 
                    onClick={() => handleDelete(item)}
                    className={styles.buttonDelete}>X</button>
                </span>
            </div>
            
            <hr className={styles.line} />
        </div>
    );
}