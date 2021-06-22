import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string().required('Enter your Full name'),
  email: Yup.string().email('Invalid email').trim().lowercase().required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be atleast 6 characters long')
    .max(20, 'Password must be atmost 20 characters long')
    .required('Password is required'),
  repeat_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password'),
});

export default registerSchema;
