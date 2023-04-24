import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Container } from 'components/Container/Container';
import { Form, FormBtn, FormInput, FormLabel } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <FormLabel>Username</FormLabel>
          <FormInput variant="filled" type="text" name="name" />
        </label>
        <label>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" />
        </label>
        <label>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" name="password" />
        </label>
        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Container>
  );
};
