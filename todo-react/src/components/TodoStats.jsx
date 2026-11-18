function TodoStats({ todos }) {
  const unfinishedCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-stats">
      <span>{unfinishedCount} tugas belum selesai</span>
    </div>
  );
}

export default TodoStats;