import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeFilter } from '/src/actions/data/todo';

function TaskControls(props) {
  const dispatch = useDispatch();

  const totalTodos = () => {
    return props.todos.length;
  };

  const totalCompleted = () => {
    const complete = props.todos.filter(item => item.completed === true);
    return complete.length;
  };

  const changeFilter = name => {
    dispatch(activeFilter(name));
  };
  const filters = props.filterList.map(filter => {
    return (
      <button
        key={filter.name}
        onClick={() => changeFilter(filter.name)}
        className={props.active === filter.name ? 'btn-active' : filter.name}
      >
        {filter.label || filter.name}
      </button>
    );
  });

  return (
    <div className="task-controls">
      <span>
        {totalCompleted()} / {totalTodos()} Completed
      </span>
      {filters}
    </div>
  );
}

export default TaskControls;
