import React, { useState } from 'react';

function Calendar() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [importance, setImportance] = useState('normal');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, importance }]);
      setNewTask('');
    }
  };

  const sortedTasks = tasks.sort((a, b) => {
    const importanceLevels = { high: 3, normal: 2, low: 1 };
    return importanceLevels[b.importance] - importanceLevels[a.importance];
  });

  return (
    <div>
      <h2>Calendar</h2>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={importance} onChange={(e) => setImportance(e.target.value)}>
        <option value="high">High</option>
        <option value="normal">Normal</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {sortedTasks.map((task, index) => (
          <li key={index}>
            {task.text} - <strong>{task.importance}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
