import React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { withAuthState } from '/src/components/hoc/auth';

import {TodoList, AddTodo, Footer } from './todo';

import './home.css';

function Home(props) {

  const {user,todos,visibilityFilter} = useSelector(state=>({
      user:state.data.auth.user,
      todos:state.data.todos,
      visibilityFilter:state.data.visibilityFilter
  }))
  const dispatch = useDispatch();

  React.useEffect(() => {
      props.fetch()
  }, [])

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed);
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed);
    }
  };
  return (
    <div className="todo-app">
      <h1 className="todo-title">Welcome {user.name} <br/></h1>
      <button className='log-out' onClick={props.logout()}>Log Out</button>
      <TodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={id =>
          dispatch({
            type: 'TOGGLE_TODO',
            id,
          })
        }
      />
      <AddTodo
        onAddClick={text =>{
          dispatch({
            type: 'ADD_TODO',
            id: uuid(),
            text,
          })
        }
        }
      />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterClick={filter =>
          dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
          })
        }
      />
    </div>
  );
}

export default withAuthState(Home);
