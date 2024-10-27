'use client';
import React, { useState } from 'react';
import TodoItem from 'components/TodoItem';

const TodoList = () => {
  const [tasks, setTasks] = useState<
    Array<{ task: string; completed: boolean }>
  >([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };
  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='p-4'>
      <input
        type='text'
        placeholder='Add a task'
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
        className='p-2 border round w-full mb-8'
      ></input>

      <div>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task.task}
            toggleCompletion={() => removeTask(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
