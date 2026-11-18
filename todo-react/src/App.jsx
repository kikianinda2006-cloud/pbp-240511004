import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import './App.css';

function App() {
  // Mengambil data dari localStorage saat pertama kali aplikasi dimuat
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        return JSON.parse(savedTodos);
      } catch (e) {
        console.error('Gagal memparsing data dari localStorage', e);
        return [];
      }
    }
    return [];
  });

  // Menyimpan data ke localStorage setiap kali state 'todos' berubah
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Fungsi untuk menambah tugas baru
  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  // Fungsi untuk mengubah status tugas (selesai / belum)
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Fungsi untuk menghapus tugas
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <div className="todo-card">
        <div className="app-header">
          <span className="app-icon">📝</span>
          <h1>Daftar Tugas React</h1>
        </div>
        
        <TodoForm addTodo={addTodo} />
        <TodoStats todos={todos} />
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </div>
    </div>
  );
}

export default App;