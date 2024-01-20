'use client';
import React, { useState } from 'react';
export const Todo = () => {
  const [tasks, setTasks] = useState<
    Array<{ task: string; completed: boolean }>
  >([]);
  const [newTask, setNewTask] = useState('');
  // タスク配列に新しいタスクを追加する
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { task: newTask, completed: false }]);
      setNewTask('');
    }
  };
  // タスクを削除
  const removeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  const todoItemList = (tasks: Array<{ task: string; completed: boolean }>) => {
    return tasks.map((value: { task: string }, index: number) => {
      return (
        <div
          className='flex justify-between p-2 broder-b bg-white mb-5'
          key={index}
        >
          <span className='flex-1'>{value.task}</span>
          <button onClick={() => removeTask(index)} className='text-xl'>
            delete
          </button>
        </div>
      );
    });
  };
  return (
    <div className='container mx-auto p-8 text-center max-w-2xl'>
      <div>Todo遷移先ページ</div>
      <h1 className='text-2xl nmb-4'>Todo App</h1>

      <div className='p-4'>
        <input
          type='text'
          placeholder='Add a task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
          className='p-2 border round w-full mb-8'
        ></input>
        <div>{todoItemList(tasks)}</div>
      </div>
    </div>
  );
};

export default Todo;
