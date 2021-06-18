import React from 'react';
import { useFormik } from 'formik';
import {Link} from 'react-router-dom';

import registerSchema from '/src/schemas/register';

import Button from '../common/buttons';
import Input from '../common/input';
import Card from '../common/card';

export default function Register() {
    const formik = useFormik({
        initialValues: {
            name:'',
          email: '',
          password:'',
          repeat_password:''
        },
        validationSchema:registerSchema,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

  return (
    <div className="box">
      <Card image="true" heading="Register" subheading="Create an account! 🎉" footer='true'>

        <form onSubmit={formik.handleSubmit}>
        <Input
         id="name"
         type="text"
         label="Full Name *"
         status= {formik.errors.name?'red':'green'}
         {...formik.getFieldProps('name')}
       />
        <Input
         id="email"
         type="text"
         label="E-mail *"
         status= {formik.errors.email?'red':'green'}
         {...formik.getFieldProps('email')}
       />
       {formik.touched.email && formik.errors.email ? (
         <div style={{color:'red'}}>{formik.errors.email}</div>
       ) : null}
       <Input
         id="password"
         type="password"
         label="Password *"
         status= {formik.errors.password?'red':'green'}
         {...formik.getFieldProps('password')}
       />
       {formik.touched.password && formik.errors.password ? (
         <div style={{color:'red'}}>{formik.errors.password}</div>
       ) : null}
       <Input
         id="repeat_password"
         type="password"
         label="Repeat Password *"
         status= {formik.errors.repeat_password?'red':'green'}
         {...formik.getFieldProps('repeat_password')}
       />
       {formik.touched.repeat_password && formik.errors.repeat_password ? (
         <div style={{color:'red'}}>{formik.errors.repeat_password}</div>
       ) : null}
        <Button type='submit' buttonText="Register" buttonClass="login-button" color="green" />
        </form>
        <div>
          <p style={{textAlign:'center'}}>Already have an account? <Link to='/login' replace>Login Instead</Link></p>
        </div>
      </Card>
    </div>
  );
}
