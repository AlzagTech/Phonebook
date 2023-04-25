import styled from 'styled-components';

export const TextBox = styled.div`
  text-align: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

export const WelcomeMessage = styled.p`
  margin-bottom: 36px;

  font-size: 28px;
  font-weight: 500;
  text-align: center;
`;

export const HomePageMessage = styled.div`
  text-align: center;

  font-size: 18px;

  & + & {
    margin-top: 12px;
  }
`;
