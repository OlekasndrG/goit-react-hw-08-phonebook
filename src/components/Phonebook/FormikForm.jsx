import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FormContainer, FormikErrorMessage } from './Phonebook.styled';

import { useDispatch, useSelector } from 'react-redux';

import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsOperations';
import { toast } from 'react-toastify';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Please enter name'),
  number: Yup.number().required('Please enter number'),
});

const initialValues = {
  name: '',
  number: '',
};
const ContactsForm = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContacts);

  const formSubmitHandler = (data, { resetForm }) => {
    if (
      ContactsArray.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.warning(`${data.name} is already in contacts.`, {
        theme: 'colored',
      });
      return;
    }
    dispatch(
      addContact({
        ...data,
      })
    );
    toast.success(`${data.name} is added to Your Phonebook.`, {
      theme: 'colored',
    });
    resetForm();
  };

  return (
    <>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={formSubmitHandler}
        >
          {({ errors }) => (
            <FormContainer>
              <label htmlFor="name">
                Name
                <Field type="text" name="name" />
                <ErrorMessage name="name" component={FormikErrorMessage} />
              </label>

              {/* <ErrorMessage name="name">
                {msg => <FormikErrorMessage>{msg}</FormikErrorMessage>}
              </ErrorMessage> */}
              <label htmlFor="number">
                Number
                <Field type="text" name="number" />
                <ErrorMessage name="number" component={FormikErrorMessage} />
              </label>

              {/* <ErrorMessage name="number">
                {msg => <FormikErrorMessage>{msg}</FormikErrorMessage>}
              </ErrorMessage> */}

              <button type="submit"> Add to contacts</button>
            </FormContainer>
          )}
        </Formik>
      </div>
    </>
  );
};
// ContactsForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
// };

export default ContactsForm;
