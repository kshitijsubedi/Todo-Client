import './home.css';
import React from 'react';
import {FiPlus,FiList,FiCheck,FiX} from 'react-icons/fi'

export const Todo = ({ onClick, completed, text }) => (
  <li className={completed ? 'todo todo--completed' : 'todo'} onClick={onClick}>
    <span className="todo__content">{text}</span>
  </li>
);

export const TodoList = ({ todos, onTodoClick }) => {
  return (
    <div>
      {todos.length>0?todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      )):<p>Empty. Try Adding one 😀</p>}
      </div>
  );
};

export const AddTodo = ({ onAddClick }) => {
  let input;
  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        ref={node => {
          input = node;
        }}
      />
      <button
        className="add-todo__btn"
        onClick={() => {
          input.value ? onAddClick(input.value) : false;
          input.value = '';
        }}
      >
       <FiPlus/>
      </button>
    </div>
  );
};

export const FilterLink = ({ filter, currentFilter, children, onClick }) => {
  return (
    <a
      className="filter__link"
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
};

export const Footer = ({ visibilityFilter, onFilterClick }) => (
  <div className="filters">
    <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter} onClick={onFilterClick}>
      <FiList style={{color:'blue'}}/>
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter} onClick={onFilterClick}>
     <FiX  style={{color:'red'}}/>
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter} onClick={onFilterClick}>
     <FiCheck  style={{color:'green'}}/>
    </FilterLink>
  </div>
);
