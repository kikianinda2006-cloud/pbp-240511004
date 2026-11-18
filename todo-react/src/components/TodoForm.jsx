import { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Tulis tugas baru..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-button">Tambah</button>
    </form>
  );
}

export default TodoForm;