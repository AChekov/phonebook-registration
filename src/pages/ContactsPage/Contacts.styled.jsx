import styled from 'styled-components';
import background from '../../Images/background.jpg';

export const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const Container = styled.div`
  background-image: url(${background});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;
