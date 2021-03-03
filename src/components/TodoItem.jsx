import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [editName, setName] = useState('');

  return (
    <div className="container mt-5">
      <div className="row justify-content-around align-items-center m-1">
        <div className="col-1">
          #{todo.id.length > 1 ? todo.id[2] : todo.id}
        </div>
        <div className="col-5">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={editName}
              placeholder={todo.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          ) : (
            todo.name
          )}
        </div>
        <button
          onClick={() => {
            if (editable) {
              dispatch(
                updateTodo({
                  ...todo,
                  name: editName,
                })
              );
              setName(todo.name);
            }
            setEditable(!editable);
          }}
          className="col-2 btn btn-primary mx-1"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="col-2 btn btn-danger mx-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
