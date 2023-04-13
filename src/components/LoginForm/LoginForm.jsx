import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'redux/auth/operations';

const SubmitSchema = Yup.object().shape({
  email: Yup.string().nullable().email().required('Enter email'),
  password: Yup.string()
    .min(8 | 'Password must be at least 8 characters long')
    .max(
      16 | 'The maximum length of the password must not exceed 16 characters'
    )
    .required('Enter password'),
});

export function LoginForm() {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(logIn(values));
          resetForm();
        }}
      >
        <Form>
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
