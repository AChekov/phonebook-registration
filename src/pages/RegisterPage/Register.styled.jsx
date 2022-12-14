import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 25px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 0 15px 0 15px;

  border-radius: 5px;
`;

export const Button = styled.button`
  width: 200px;
  height: 40px;
  cursor: pointer;
  margin: 5px 0 5px;
  border-radius: 5px;
  color: #1d628b;
  font-weight: bold;
  background-color: transparent;
  border: 2px solid #1d628b;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;
