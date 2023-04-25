import styled from 'styled-components';
import {
  Form as FormikForm,
  Field as FormikField,
  ErrorMessage as FormikMessage,
} from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;

  label + label {
    margin-top: 16px;
  }
`;

export const FormLabel = styled.p`
  margin-bottom: 4px;
`;

export const FormInput = styled(FormikField)`
  width: 100%;

  padding: 10px;

  outline: none;
  border: none;
  border-radius: 4px;

  background-color: #efefef;

  &:focus {
    background-color: #e6e3e3;
  }
`;

export const FormBtn = styled.button`
  margin-top: 30px;

  padding-top: 10px;
  padding-bottom: 10px;

  border: none;
  border-radius: 4px;

  background-color: rgba(57, 116, 148, 0.8);
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: rgba(57, 116, 148, 1);
  }
`;

export const FormErrorMessage = styled(FormikMessage)`
  color: red;
`;
