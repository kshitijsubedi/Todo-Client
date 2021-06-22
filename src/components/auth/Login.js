import React from 'react';
import { useFormik } from 'formik';

import { withAuthState } from '/src/components/hoc/auth';
import loginSchema from '/src/schemas/login';

import Button from '../common/buttons';
import Input from '../common/input';
import Card from '../common/card';

function Login(props) {
  const { login } = props;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: values => {
      const { email, password } = values;
      login(email, password);
    },
  });

  return (
    <Card
      heading="Todo App"
      title="Welcome Back! 🥳"
      subheading="Please sign in to continue"
      footerlink="/register"
      footertext="Don't have an account? "
      footer="Create an account"
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          type="text"
          label="E-mail"
          status={formik.errors.email ? 'red' : 'green'}
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
        <Input
          id="password"
          type="password"
          label="Password"
          status={formik.errors.password ? 'red' : 'green'}
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
        <Button
          type="submit"
          buttonText={props.isLoggingIn ? 'Logging In ..' : 'Log In'}
          buttonClass="login-button"
          color="blue"
        />
      </form>
    </Card>
  );
}

export default withAuthState(Login);
