import styled from 'styled-components';

export const TextBox = styled.div`
  text-align: center;

  padding-top: 8px;
  padding-bottom: 8px;
`;

export const ContentBox = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
`;

export const WelcomeMessage = styled.p`
  margin-bottom: 20px;

  font-size: 28px;
  text-align: center;
`;

export const HomePageMessage = styled.div`
  text-align: center;

  font-size: 18px;

  & + & {
    margin-top: 12px;
  }
`;
