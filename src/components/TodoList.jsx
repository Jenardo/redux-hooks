import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

function TodoList() {
  const todo = useSelector((state) => state);
  return (
    <div className="my-4">
      {todo.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default TodoList;
