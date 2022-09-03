import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

export const Avatar = styled.img`
  margin-right: 6px;
`;

export const Name = styled.p`
  font-weight: 700;
  margin-right: 10px;
  color: #1d628b;
`;

export const Button = styled.button`
  padding: 2px 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  background-color: inherit;
  border: 1px solid #1d628b;
  border-radius: 5px;
  color: #1d628b;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.07);
  }
`;
