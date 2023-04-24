import { Container } from 'components/Container/Container';
import {
  Form,
  FormBtn,
  FormInput,
  FormLabel,
} from 'components/RegisterForm/RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          <FormLabel>Email</FormLabel>
          <FormInput type="email" name="email" />
        </label>
        <label>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" name="password" />
        </label>
        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </Container>
  );
};
