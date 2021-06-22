import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTask, removeTask } from '/src/actions/data/todo';

function TaskItem(props) {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        id={props.task.id}
        type="checkbox"
        checked={props.task.completed}
        onChange={() => dispatch(checkTask(props.task.id, !props.task.completed))}
      />
      <label htmlFor={props.task.id}>
        {props.task.item}
        <span className="task-strike"></span>
      </label>
      <button className="task-item-remove" onClick={() => dispatch(removeTask(props.task.id))}>
        <svg viewBox="0 0 40 40">
          <path d="M15 15 L25 25 M25 15 L15 25" />
        </svg>
      </button>
    </li>
  );
}
export default TaskItem;
