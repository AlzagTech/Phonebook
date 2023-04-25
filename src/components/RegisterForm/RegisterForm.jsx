import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { register } from 'redux/auth/operations';

import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
} from 'components/ContactForm/Form.styles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          <FormLabel>Username</FormLabel>
          <FormInput
            id="name"
            variant="filled"
            type="text"
            name="name"
            required
          />
        </label>
        <label>
          <FormLabel>Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+"
            required
          />
        </label>
        <label>
          <FormLabel>Password</FormLabel>
          <FormInput id="password" type="password" name="password" required />
        </label>
        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Formik>
  );
};
