import { useState } from 'react'

const Todo = () => {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedTodo = newTodo.trim()

    if (!trimmedTodo) return

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: trimmedTodo, completed: false },
    ])
    setNewTodo('')
  }

  const toggleTodo = (index) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo, todoIndex) =>
        todoIndex === index ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  return (
    <div className="todo-app">
      <div className="todo-card">
        <h1>Todo App</h1>

        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            className="todo-input"
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className="add-button" type="submit">
            Add Todo
          </button>
        </form>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li
              key={`${todo.text}-${index}`}
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
              </span>
              <button className="todo-toggle" onClick={() => toggleTodo(index)}>
                {todo.completed ? 'Undo' : 'Done'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo