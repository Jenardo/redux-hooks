import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteTodo, updateTodo } from '../redux/actions';

const Button = styled.button`
  background: ${(props) => (props.active ? 'red' : '')};
  display: inline-block;
  font-weight: 400;
  color: white;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  user-select: none;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
`;

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
        <Button
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
          className="col-2"
        >
          Edit
        </Button>
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
