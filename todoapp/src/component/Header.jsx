import styles from './header.module.css';

export default function Header(){
    return (
        <div className={styles.header}>
            <h1 >Todo App</h1>
            <p>Keep track of your tasks</p>
        </div>
    );
}