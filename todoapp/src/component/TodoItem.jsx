import '../css/style.css';


export default function TodoItem({item}) {
    return (
        <div className="todo-item">
            <h1 className="header">{item}</h1>
        </div>
    );
}