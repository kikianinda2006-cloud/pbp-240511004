function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button 
        className="delete-button" 
        onClick={() => deleteTodo(todo.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;