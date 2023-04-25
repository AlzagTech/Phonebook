import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  border-radius: 4px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  & + & {
    margin-bottom: 20px;
  }
`;
