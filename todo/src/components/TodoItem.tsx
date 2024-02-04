'use client';
import React from 'react';

const TodoItem = (props: { task: string; toggleCompletion: () => void }) => {
  return (
    <div className='flex justify-between p-2 broder-b bg-white mb-5'>
      <span className='flex-1'>{props.task}</span>
      <button onClick={props.toggleCompletion} className='text-xl'>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
