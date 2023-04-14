import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone-lite';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { TextField } from 'formik-mui';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const SubmitSchema = Yup.object().shape({
  name: Yup.string().required('Enter contact name'),
  number: Yup.string().phone('UA').required('Enter phone number'),
});

export function ContactsForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = newContact => {
    const { name: newName } = newContact;
    let isContactExists = contacts.some(({ name }) => name === newName);
    if (isContactExists) {
      return alert(`${newName} is already in contacts!`);
    }
    dispatch(addContact(newContact));
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SubmitSchema}
        onSubmit={(values, { resetForm }) => {
          handleSubmit({
            ...values,
          });
          resetForm();
        }}
      >
        <Form autoComplete="off">
          <Box marginY={1} sx={{ width: 350 }}>
            <Field
              component={TextField}
              type="name"
              label="Name*"
              name="name"
              size="small"
              fullWidth
            />
          </Box>
          <Box marginY={1}>
            <Field
              component={TextField}
              type="tel"
              label="Number*"
              name="number"
              size="small"
              fullWidth
            />
          </Box>
          <Button variant="contained" type="submit" fullWidth>
            Add contact
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
