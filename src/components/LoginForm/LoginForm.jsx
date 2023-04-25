import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { logIn } from 'redux/auth/operations';

import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
} from 'components/ContactForm/Form.styles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
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
        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </Formik>
  );
};
