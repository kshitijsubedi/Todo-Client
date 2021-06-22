import React from 'react';
import Header from '../common/header';
import TaskControls from './taskControl';
import TaskList from './taskList';
import AddTask from './addTask';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { syncTodo } from '../../actions/data/todo';

import { withAuthState } from '/src/components/hoc/auth';

function Todo(props) {
  const { todos, filterList, active, users } = useSelector(state => ({
    todos: state.data.todos.todos,
    filterList: state.data.todos.filters,
    active: state.data.todos.activefilter,
    users: state.data.auth.user,
  }));

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(syncTodo());
    props.fetch();
  }, []);

  function getActiveList() {
    let tasks;
    function sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }
    for (let i = 0, len = filterList.length; i < len; i++) {
      const element = filterList[i];
      if (active === element.name) {
        tasks = todos.filter(function (item) {
          return element.method(item);
        });
      }
    }
    tasks.sort(sortByProperty('id'))
    return tasks;
  }
  return (
    <div className="app-container">
      <Header user={users} />
      <div className="app">
        <AddTask />
        <TaskList tasks={getActiveList()} />
        <TaskControls todos={todos} filterList={filterList} active={active} />
      </div>
    </div>
  );
}

export default withAuthState(Todo);
