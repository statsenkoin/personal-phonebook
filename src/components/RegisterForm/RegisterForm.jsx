import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { register } from 'redux/auth/operations';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(8 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values));
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">User name:</label>
          <Field type="text" name="name" placeholder="Enter user name" />
          <ErrorMessage name="name" component="span"></ErrorMessage>

          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" placeholder="Enter email" />
          <ErrorMessage name="email" component="span"></ErrorMessage>

          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" placeholder="Enter password" />
          <ErrorMessage name="password" component="span"></ErrorMessage>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
