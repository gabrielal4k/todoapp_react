import styles from './todoitem.module.css';

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(item){
        console.log(`Deleting item: ${item.name}`);

        todos = todos.filter((todo) => todo !== item);
        setTodos(todos);
    };


    return (
        <div className={styles.modernItem}>
            <div className={styles.modernItemName}>
                {item.name}
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