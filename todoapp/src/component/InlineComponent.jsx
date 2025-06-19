import styles from './InlineComponent.module.css';


export default function InlineComponent() {
    return (
        <div>
            <h1 className={styles.header}>Inline Component</h1>
            <p>This is an inline component example.</p>
        </div>
    );
}