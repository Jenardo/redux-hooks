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

  &:hover {
    background-color: blue;
    box-shadow: 1px rgba(0, 0, 0, 0.35);
    transition: font-weight 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
  }

  &:focus {
    box-shadow: 1px rgba(0, 0, 0, 0.5);
    background-color: blue;
  }
`;

const ID = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
`;

const Name = styled(ID)`
  text-transform: uppercase;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;

const Description = styled(Name)`
  text-transform: none;
  font-size: 13px;
  line-height: 15px;
  font-weight: 400;
`;

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editable, setEditable] = useState(false);
  const [editName, setName] = useState('');
  const [editDesc, setDesc] = useState('');

  return (
    <div className="container mt-5">
      <div className="row justify-content-around align-items-center m-1">
        <ID className="col-1">#{todo.id.length > 1 ? todo.id[2] : todo.id}</ID>
        <Name className="col-3">
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
        </Name>
        <Description className="col-3">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={editDesc}
              placeholder={todo.description}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></input>
          ) : (
            todo.description
          )}
        </Description>
        <Button
          onClick={() => {
            if (editable) {
              dispatch(
                updateTodo({
                  ...todo,
                  name: editName,
                  description: editDesc,
                })
              );
              setName(todo.name);
              setDesc(todo.description);
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
