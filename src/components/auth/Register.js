import React from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

import registerSchema from '/src/schemas/register';
import { withAuthState } from '/src/components/hoc/auth';

import Button from '../common/buttons';
import Input from '../common/input';
import Card from '../common/card';

function Register(props) {
  const { register } = props;
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeat_password: '',
    },
    validationSchema: registerSchema,
    onSubmit: values => {
      const { name, email, password } = values;
      register(name, email, password);
    },
  });

  return (
    <Card
      heading="Todo app"
      title="Get Started 🎉"
      subheading="Create new account in a minute."
      footerlink="/login"
      footertext="Already have an account? "
      footer="Sign In"
    >
      <form onSubmit={formik.handleSubmit}>
        <Input
          id="name"
          type="text"
          label="Full Name"
          status={formik.errors.name ? 'red' : 'green'}
          {...formik.getFieldProps('name')}
        />
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
        <Input
          id="repeat_password"
          type="password"
          label="Repeat Password"
          status={formik.errors.repeat_password ? 'red' : 'green'}
          {...formik.getFieldProps('repeat_password')}
        />
        {formik.touched.repeat_password && formik.errors.repeat_password ? (
          <div style={{ color: 'red' }}>{formik.errors.repeat_password}</div>
        ) : null}
        <Button type="submit" buttonText="Register" buttonClass="login-button" color="green" />
      </form>
    </Card>
  );
}

export default withAuthState(Register);
