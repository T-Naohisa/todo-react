import React, { useState } from 'react';
import TodoList from 'components/TodoList';
const Todo = () => {
  return (
    <div className='container mx-auto p-8 text-center max-w-2xl'>
      <div>Todo遷移先ページ</div>
      <TodoList />
    </div>
  );
};

export default Todo;
