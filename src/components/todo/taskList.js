import React from 'react';
import TaskItem from './taskItem';

function TaskList(props) {
  let taskItems = props.tasks.map(task => {
    return <TaskItem task={task} key={task.id} />;
  });
  return <ul className="task-list">{taskItems}</ul>;
}

export default TaskList;
