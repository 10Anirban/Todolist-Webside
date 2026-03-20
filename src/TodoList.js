import React, { useState } from 'react';
import './style.css';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish project report', completed: false },
    { id: 2, text: 'Go grocery shopping', completed: false },
    { id: 3, text: 'Call the electrician', completed: false },
  ]);
  const [inputText, setInputText] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputText('');
  };

  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div id="container">
      <h1>TODAY'S CHALLENGES</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add a new challenge..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={task.completed ? 'completed' : ''}
            onClick={() => handleToggleComplete(task.id)}
          >
            <span className="checkbox"></span>
            <label>{task.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
