import './index.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '/src/actions/data/todo';
import { useFormik } from 'formik';

function AddTask() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      task: '',
    },
    onSubmit: (values, actions) => {
      if (values.task !== '') {
        actions.resetForm();
        return dispatch(
          addTodo({
            item: values.task,
          })
        );
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="task-form">
      <div className="task-input">
        <input type="text" id="task" {...formik.getFieldProps('task')} placeholder="What do you need to do?" />
      </div>
      <button className="task-add-button" type="submit">
        <svg viewBox="0 0 40 40">
          <path d="M10 20 L30 20 M20 10 L20 30" />
        </svg>
      </button>
    </form>
  );
}

export default AddTask;
